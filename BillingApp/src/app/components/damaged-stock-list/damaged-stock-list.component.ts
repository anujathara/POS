import { Component, OnInit } from '@angular/core';

export interface ProductElement {
  SerialNumber: Number;
  ProductCode: string;
  ProductName: string;
  qty: Number;
  free: Number;
  tax: Number;
  mrp: number;
  unitPrice: Number;
  netAmount: Number;
}
export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-damaged-stock-list',
  templateUrl: './damaged-stock-list.component.html',
  styleUrls: ['./damaged-stock-list.component.css']
})
export class DamagedStockListComponent implements OnInit {

  productCount: number = 1;
  data: any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Pending'},
    {value: 'pizza-1', viewValue: 'Delivered'},
  ];

  displayedColumns: string[] = [
    'billNo',
    'date',
    'customer',
    'duedate',
    'duetime',
    'amount',
    // 'advance',
    // 'payment',
    // 'status',
    // 'delivery',
    // 'total',
    // 'salebillamt',
  ];

 

  constructor() {
  }

  ngOnInit() {
    }
  
  
}

