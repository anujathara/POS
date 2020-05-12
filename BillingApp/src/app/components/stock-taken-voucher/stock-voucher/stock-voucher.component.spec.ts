import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockVoucherComponent } from './stock-voucher.component';

describe('StockVoucherComponent', () => {
  let component: StockVoucherComponent;
  let fixture: ComponentFixture<StockVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
