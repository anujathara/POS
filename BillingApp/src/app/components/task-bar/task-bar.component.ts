import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskService } from 'src/app/shared/broadcast-service/task.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import urls from 'src/app/shared/constants/url-contant';


@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent implements OnInit, AfterViewInit, OnDestroy {
  currentUrl: any;
  tabs: any[] = [];
  selected = new FormControl(0);

  subscription: Subscription;
  subscription1: Subscription;

  constructor(private taskService: TaskService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.loadUrl(router.url);
      }
    });
  }

  clearTask(path: string) {
    const task = this.tabs.filter(x => x.path === path);
    const index = this.tabs.indexOf(task[0]);
    if (this.tabs.length === 1) {
      this.tabs = [];
      this.router.navigate(['/']);
    } else {
      if (index === this.tabs.length - 1) {
        this.selected.setValue(this.tabs.length - 2);
      } else {
        this.selected.setValue(index);
      }
      this.tabs.splice(index, 1);
      this.router.navigate([this.tabs[this.selected.value]['path']]);
    }
  }

  CreateTab(title: string, path: string) {
    const task = this.tabs.filter(x => x.path === path);
    const index = this.tabs.indexOf(task[0]);
    if (index === -1) {
      this.tabs.push({ id: 0, title: title, path: path })
      this.selected.setValue(this.tabs.length - 1);
    } else {
      this.selected.setValue(index);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.taskService.getTask().subscribe(task => { this.CreateTab(task.title, task.path) });
    this.subscription1 = this.taskService.clearTask$.subscribe(
      task => {
        this.clearTask(task);
      });
  }

  ngAfterViewInit() {
    //alert(this.router.url);
  }

  onTabChange(event: MatTabChangeEvent) {
    if (this.tabs.length) {
      this.router.navigate([this.tabs[event.index]['path']]);
    }
  }

  loadUrl(url: string) {
    const menu = urls.filter(x => x.url === url);
    this.CreateTab(menu[0].name, url)
  }
}
