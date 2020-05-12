import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalesTabComponent } from './components/sales-tab/sales-tab.component';
import { HomeComponent } from './components/home/home.component';
import { PurchaseEntryComponent } from './components/purchase-entry/purchase-entry.component';
import { SalesEnquiryComponent } from './components/sales-enquiry/sales-enquiry.component';
import { SalesItemEnquiryComponent } from './components/sales-item-enquiry/sales-item-enquiry.component';
import { PurchaseEnquiryComponent } from './components/purchase-enquiry/purchase-enquiry.component';
import { PurchaseItemEnquiryComponent } from './components/purchase-item-enquiry/purchase-item-enquiry.component';
import { SalesReturnComponent } from './components/sales-return/sales-return.component';
import { SalesReturnEnquiryComponent } from './components/sales-return-enquiry/sales-return-enquiry.component';
import { PurchaseReturnEnquiryComponent } from './components/purchase-return-enquiry/purchase-return-enquiry.component';
import { PurchaseReturnComponent } from './components/purchase-return/purchase-return.component';
import { SalesEstimateComponent } from './components/sales-estimate/sales-estimate.component';
import { DamagedStockComponent } from './components/damaged-stock/damaged-stock.component';
import { DamagedStockListComponent } from './components/damaged-stock-list/damaged-stock-list.component';
import { CustomerOrderFormComponent } from './components/customer-order-form/customer-order-form.component';
import { ListOrderFormComponent } from './components/list-order-form/list-order-form.component';
import { StockJournalComponent } from './components/stock-journal/stock-journal.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { StockVoucherComponent } from './components/stock-taken-voucher/stock-voucher/stock-voucher.component';
import { StockUpdationComponent } from './components/stock-taken-voucher/stock-updation/stock-updation.component';
import { ProductComponent } from './components/creation/product/product.component';

const appRoutes: Routes = [
  { path: 'new-sales-bill', component: SalesTabComponent },
  { path: 'modify-sales-bill', component: SalesTabComponent },
  { path: 'cancel-sales-bill', component: SalesTabComponent },
  { path: 'print-sales-bill', component: SalesTabComponent },
  { path: 'sales-enquiry', component: SalesEnquiryComponent },
  { path: 'sales-item-enquiry', component: SalesItemEnquiryComponent },
  { path: 'new-purchase-entry', component: PurchaseEntryComponent}, 
  { path: 'modify-purchase-entry', component: PurchaseEntryComponent}, 
  { path: 'cancel-purchase-entry', component: PurchaseEntryComponent}, 
  { path: 'print-purchase-entry', component: PurchaseEntryComponent}, 
  { path: 'purchase-enquiry', component: PurchaseEnquiryComponent },
  { path: 'purchase-item-enquiry', component: PurchaseItemEnquiryComponent },
  { path: 'new-sales-return', component: SalesReturnComponent },
  { path: 'modify-sales-return', component: SalesReturnComponent },
  { path: 'cancel-sales-return', component: SalesReturnComponent },
  { path: 'print-sales-return', component: SalesReturnComponent },
  { path: 'sales-return-enquiry', component: SalesReturnEnquiryComponent },
  { path: 'new-purchase-return', component:  PurchaseReturnComponent },
  { path: 'modify-purchase-return', component:  PurchaseReturnComponent },
  { path: 'cancel-purchase-return', component:  PurchaseReturnComponent },
  { path: 'print-purchase-return', component:  PurchaseReturnComponent },
  { path: 'purchase-return-enquiry', component:  PurchaseReturnEnquiryComponent },
  { path: 'new-sales-estimate', component:  SalesEstimateComponent },
  { path: 'modify-sales-estimate', component:  SalesEstimateComponent },
  { path: 'cancel-sales-estimate', component:  SalesEstimateComponent },
  { path: 'new-damaged-stock', component:  DamagedStockComponent },
  { path: 'modify-damaged-stock', component:  DamagedStockComponent },
  { path: 'cancel-damaged-stock', component:  DamagedStockComponent },
  { path: 'damaged-stock-list', component:  DamagedStockListComponent },
  { path: 'customer-order-form', component:  CustomerOrderFormComponent },
  { path: 'list-order-form', component:  ListOrderFormComponent },
  { path: 'stock-journal', component:  StockJournalComponent },
  { path: 'purchase-order', component:  PurchaseOrderComponent },
  { path: 'purchase-order-list', component:  PurchaseOrderListComponent },
  { path: 'stock-voucher', component:  StockVoucherComponent },
  { path: 'stock-updation', component:  StockUpdationComponent },
  { path: 'new-product', component:  ProductComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
