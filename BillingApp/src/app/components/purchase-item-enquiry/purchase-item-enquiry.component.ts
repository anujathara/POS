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
export interface Enquiry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-purchase-item-enquiry',
  templateUrl: './purchase-item-enquiry.component.html',
  styleUrls: ['./purchase-item-enquiry.component.css']
})
export class PurchaseItemEnquiryComponent implements OnInit {


  productCount: number = 1;
  data: any;
  enquiries: Enquiry[] = [
    {value: '1', viewValue: 'Product Name'},
    {value: '2', viewValue: 'Product Code'},
    {value: '3', viewValue: 'Date'},
    {value: '4', viewValue: 'MRP'},
    {value: '5', viewValue: 'Description#1'},
    {value: '6', viewValue: 'Description#2'},
    {value: '7', viewValue: 'Description#3'},
    {value: '8', viewValue: 'Batch'},
  ];
  SearchTypes: Enquiry[] = [
    {value: '1', viewValue: 'Word Start With'},
    {value: '2', viewValue: 'Whole Word'},
    {value: '3', viewValue: 'Word Anywhere'},
  ];
  selected = '3';
  displayedColumns: string[] = [
    'slNo',
    'billNo',
    'date',
    'customer',
    'duetime',
    'amount',
    'advance',
    'payment',
    'status',
    'delivery',
    'total',
    'salebillamt',
    'disc',
    'mrp',
    'batch',
    'desc'
  ];

 

  constructor() {
  }

  ngOnInit() {
    }
  
  
}

