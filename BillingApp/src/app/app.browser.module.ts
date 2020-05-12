import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { SalesBillComponent } from './components/sales-bill/sales-bill.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SalesTabComponent } from './components/sales-tab/sales-tab.component';
import { TaskService } from './shared/broadcast-service/task.service';
import { TaskBarComponent } from './components/task-bar/task-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { SqlService } from './shared/data-service/sql.service';
import { SpinnerService } from './shared/broadcast-service/spinner.service';
import { MatCardModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { PurchaseEntryComponent } from './components/purchase-entry/purchase-entry.component';
import { SalesEnquiryComponent } from './components/sales-enquiry/sales-enquiry.component';
import { SalesItemEnquiryComponent } from './components/sales-item-enquiry/sales-item-enquiry.component';
import { PurchaseEnquiryComponent } from './components/purchase-enquiry/purchase-enquiry.component';
import { PurchaseItemEnquiryComponent } from './components/purchase-item-enquiry/purchase-item-enquiry.component';
import { SalesReturnComponent } from './components/sales-return/sales-return.component';
import { PurchaseReturnComponent } from './components/purchase-return/purchase-return.component';
import { SalesEstimateComponent } from './components/sales-estimate/sales-estimate.component';
import { DamagedStockComponent } from './components/damaged-stock/damaged-stock.component';
import { DamagedStockListComponent } from './components/damaged-stock-list/damaged-stock-list.component';
import { CustomerOrderFormComponent } from './components/customer-order-form/customer-order-form.component';
import { StockJournalComponent } from './components/stock-journal/stock-journal.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { StockVoucherComponent } from './components/stock-taken-voucher/stock-voucher/stock-voucher.component';
import { StockUpdationComponent } from './components/stock-taken-voucher/stock-updation/stock-updation.component';
import { SalesReturnEnquiryComponent } from './components/sales-return-enquiry/sales-return-enquiry.component';
import { PurchaseReturnEnquiryComponent } from './components/purchase-return-enquiry/purchase-return-enquiry.component';
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';
import { ListOrderFormComponent } from './components/list-order-form/list-order-form.component';
import { ProductComponent } from './components/creation/product/product.component';
import { AppModule } from './app.module';



@NgModule({
  imports: [
    NgxDatatableModule,
    
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
    AppModule,
    BrowserTransferStateModule
  ],
  entryComponents: [ProductListComponent, SalesBillComponent],

  providers: [
    TaskService,
    SqlService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
