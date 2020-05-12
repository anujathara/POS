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
  selector: 'app-purchase-enquiry',
  templateUrl: './purchase-enquiry.component.html',
  styleUrls: ['./purchase-enquiry.component.css']
})
export class PurchaseEnquiryComponent implements OnInit {

  productCount: number = 1;
  data: any;
  enquiries: Enquiry[] = [
    {value: '1', viewValue: 'Bill No'},
    {value: '2', viewValue: 'Invoice No'},
    {value: '3', viewValue: 'Inv.Amount'},
    {value: '4', viewValue: 'Supplier'},
    {value: '5', viewValue: 'Disc Amount'},
    {value: '6', viewValue: 'Supplier'},
    {value: '7', viewValue: 'P.Type'},
    {value: '7', viewValue: 'Tax Amount'},
  ];
  SearchTypes: Enquiry[] = [
    {value: '1', viewValue: 'Word Start With'},
    {value: '2', viewValue: 'Whole Word'},
    {value: '3', viewValue: 'Word Anywhere'},
  ];
  selected = '2';
  displayedColumns: string[] = [
    'billNo',
    'date',
    'customer',
    'duedate',
    'duetime',
    'amount',
    'advance',
    'payment',
    'status',
    'delivery',
    'total',
    'salebillamt',
  ];

 

  constructor() {
  }

  ngOnInit() {
    }
  
  
}

