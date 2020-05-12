import { Component, OnInit, ViewChild, Inject, ElementRef, ViewChildren, ViewContainerRef, QueryList } from '@angular/core';
import { MatTableDataSource, MatPaginator, MAT_DIALOG_DATA, MatDialogRef, MatInput, MatTableModule } from '@angular/material';

export interface ProductElement {
  SerialNumber: number;
  ProductCode: string;
  ProductName: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  focused: ProductElement;
  highlightedRows = [];
  dataSource = new MatTableDataSource<ProductElement>();

  displayedColumns: string[] = [
    'slNo',
    'code',
    'productName'
  ];

  filterValue = '';
  //selected = [];

  @ViewChild(MatInput, {static: false}) searchInput: MatInput;
  @ViewChild("matTable", {static: false}) matTable: ElementRef<MatTableModule>;
  @ViewChild(MatPaginator, {static: false}) matPaginator: MatPaginator;
  @ViewChildren('matrow', { read: ViewContainerRef }) rows: QueryList<ViewContainerRef>;

  selectedRowIndex: number = -1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    // this.searchInput.focus();
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.data = this.data.productList;
    this.dataSource.filterPredicate = (data, filter) =>
      data.ProductName.toLowerCase().indexOf(filter) !== -1
      && data.ProductCode.toString().toLowerCase().indexOf('') !== -1;
    document.querySelector('mat-table').scrollBy(0, 10000);
    this.focused = this.dataSource.data[0];
    this.highlightedRows = [];
    this.highlightedRows.push(this.focused);
  }

  onKeyup(event) {
    if ((event.keyCode !== 38) && (event.keyCode !== 40)) {
      this.dataSource.filter = event.target.value.trim().toLowerCase();
      this.dataSource.filteredData.map((x, i) => {
        return x.SerialNumber = i + 1;
      });
      this.highlightedRows = [];
      this.highlightedRows.push(this.dataSource.filteredData[0]);
      this.focused = this.dataSource.filteredData[0];

      let row = this.rows.find(row => row.element.nativeElement.getAttribute('position') === '1');
      if (row) { 
        row.element.nativeElement.scrollIntoView(false, { behavior: 'instant' }); 
      }
    }
  }

  onKeydown(event) {
    if ((event.keyCode == 38) || (event.keyCode == 40)) {
      event.preventDefault();
      this.keydown(event);
    }
  }

  getPosition(row: ProductElement): number {
    return row.SerialNumber;
  }

  recTrackBy(index: number, item: ProductElement) {
    return item.ProductName;
  }

  switchRow(row: ProductElement) {
    let x: number = this.highlightedRows.indexOf(row);
    if (x != -1)
      this.highlightedRows.splice(x, 1);
    else {
      this.highlightedRows = [];
      this.highlightedRows.push(row);
      this.focused = row;
    }
  }

  keydown(event) {
    let rect = event.target.getBoundingClientRect();
    let x: number = this.dataSource.filteredData.indexOf(this.focused);
    let l: number = this.dataSource.filteredData.length;
    if (event.keyCode == 38) // Up
    {
      if (x > 0) {
        this.focused = this.dataSource.filteredData[x - 1];
        this.highlightedRows = [];
        this.highlightedRows.push(this.focused);
      }
    }
    else if (event.keyCode == 40) // Down
    {
      if (x < l - 1) {
        this.focused = this.dataSource.filteredData[x + 1];
        this.highlightedRows = [];
        this.highlightedRows.push(this.focused);
      }
    }
    if (this.focused != null) {
      this.showElement(this.focused.SerialNumber, rect.height);
    }
  }

  showElement(index: number, height: number) {
    let indexstr = index.toString();
    let row = this.rows.find(row => row.element.nativeElement.getAttribute('position') === indexstr);
    if (row != null) {
      let rect = row.element.nativeElement.getBoundingClientRect();
      if ((rect.y <= 0) || ((rect.y + rect.height) > height)) {
        row.element.nativeElement.scrollIntoView(false, { behavior: 'instant' });
      }
      return;
    }
    console.log('not found');
  }

  clearFilter() {
    this.filterValue = '';
  }

  onOkClick(): void {
    this.dialogRef.close(this.focused)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

