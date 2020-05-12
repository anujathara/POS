import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SpinnerService } from './shared/broadcast-service/spinner.service';
import { environment } from '../environments/environment';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showSpinner: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, private spinner: SpinnerService) {

  }

  ngOnInit() {
    this.spinner.subject.subscribe((display: boolean) => {
      setTimeout(() => {
        this.showSpinner = display;
      });
    })
    if (!isPlatformBrowser(this.platformId)) {
      const bases = this.document.getElementsByTagName('base');

      if (bases.length > 0) {
        bases[0].setAttribute('href', environment.baseHref);
      }
    }
  }

}
