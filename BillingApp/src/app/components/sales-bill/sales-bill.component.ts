import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ProductListComponent } from '../product-list/product-list.component';
import { WINDOW } from '@ng-toolkit/universal';

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

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  fontsize: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sales-bill',
  templateUrl: './sales-bill.component.html',
  styleUrls: ['./sales-bill.component.css']
})
export class SalesBillComponent implements OnInit {

  tiles: Tile[] = [
    // {text: '', fontsize: '20px', cols: 4, rows: 3, color: 'red'},
    {text: 'Sub Total:', fontsize: '20px', cols: 1, rows: 1, color: 'lightblue'},
    {text: '1254.00', fontsize: '20px', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Rs.15840.00', fontsize: '50px', cols: 3, rows: 3, color: 'lightgreen'},
     {text: 'Tax:', fontsize: '20px', cols: 1, rows: 1, color: 'lightpink'},
     {text: '54.00', fontsize: '20px', cols: 1, rows: 1, color: 'lightblue'},
     {text: 'Discount:', fontsize: '20px', cols: 1, rows: 1, color: '#DDBDF1'},
     {text: '22.00', fontsize: '20px', cols: 1, rows: 1, color: 'lightblue'},
  ];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  productCount: number = 1;
  data: any;

  displayedColumns: string[] = [
    'slNo',
    'code',
    'productName',
    'qty',
    'free',
    'tax',
    'mrp',
    'unitPrice',
    'netAmount',
  ];

  selected = new FormControl(0);
  @ViewChild('qtyInput', {static: false}) qtyInput: ElementRef;
  @Input() tabid: any;
  @Input() products: ProductElement [];
  @Input() productList: any = [];
  dataSource: any;

  constructor(@Inject(WINDOW) private window: Window, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.products);
    }
  
  openProducts() {
    let dialogHeight = (this.window.innerHeight * 90) / 100;
    const dialogRef = this.dialog.open(ProductListComponent, {
      width: '60%',
      height: dialogHeight + 'px',
      data: { productList: this.productList, dialogHeight:  dialogHeight},
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.products[this.products.length - 1]['ProductCode'] = result.ProductCode;
      this.products[this.products.length - 1]['ProductName'] = result.ProductName;
      this.qtyInput.nativeElement.focus();
    });
  }

  addProduct() {
    this.productCount++;
    this.products.push({ SerialNumber: this.productCount, ProductCode: '', ProductName: '', qty: null, free: null, tax: null, mrp: null, unitPrice: null, netAmount: null });
    this.dataSource = new MatTableDataSource(this.products);
  }
}
