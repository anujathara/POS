import { Component, ViewChild, ViewContainerRef, ViewRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';
import { SalesBillComponent, ProductElement } from '../sales-bill/sales-bill.component';
import { TaskService } from 'src/app/shared/broadcast-service/task.service';
import { SqlService } from 'src/app/shared/data-service/sql.service';

@Component({
  selector: 'app-sales-tab',
  templateUrl: './sales-tab.component.html',
  styleUrls: ['./sales-tab.component.css']
})

export class SalesTabComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef, static: false }) vc: ViewContainerRef;
  billNo: any = 1;
 
  arr: any[] = []
  tabs: any[] = []

  selected = new FormControl(0);
  tabIndex: any = 0;
  view: ViewRef;
  dynamicTabs: SalesBillComponent[] = [];
  fullProductList: any[];
  

  constructor(public dialog: MatDialog, private router: Router, private taskService: TaskService, private sqlService: SqlService) {
    this.addTab();
   }

  addTab() {
    const productList1: ProductElement[] = [
      { SerialNumber: 1, ProductCode: '', ProductName: '', qty: null, free: null, tax: null, mrp: null, unitPrice: null, netAmount: null },
    ];
    this.arr.push({ productList: productList1 });
    this.tabs.push({ id: this.billNo, products: this.arr[this.tabs.length]['productList'], name: 'Bill' + (this.tabs.length + 1), content: this.vc });
    this.selected.setValue(this.tabs.length - 1);
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === this.tabs.length) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    if (this.tabs.length === 1) {
      this.tabs = [];
      this.taskService.clearTask(this.router.url);
    } else {
      if ((this.selected.value === index) && (index !== this.tabs.length - 1)) {
          this.selected.setValue(index);
      } else {
        this.selected.setValue(this.tabs.length - 2);
      }
      this.tabs.splice(index, 1);
      let count = 0;
      this.tabs.map((x, i) => {
        if (i <= this.tabs.length - 1) {
          count = i + 1;
          this.tabs[i]['name'] = 'Bill ' + count;
        }
      })
      this.arr.splice(index, 1);
    }
  }

  ngOnInit() {
    this.sqlService.getProductList().subscribe(datas => {
      this.fullProductList = datas;
    });
  }
}



