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
  selector: 'app-sales-return-enquiry',
  templateUrl: './sales-return-enquiry.component.html',
  styleUrls: ['./sales-return-enquiry.component.css']
})
export class SalesReturnEnquiryComponent implements OnInit {

  productCount: number = 1;
  data: any;
  enquiries: Enquiry[] = [
    {value: '1', viewValue: 'Date'},
    {value: '2', viewValue: 'Amount'},
    {value: '3', viewValue: 'S.Type'},
    {value: '4', viewValue: 'Address'},
    {value: '5', viewValue: 'Bill No'},
    {value: '6', viewValue: 'Customer'},
    {value: '7', viewValue: 'Narration'},
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

