import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnEnquiryComponent } from './purchase-return-enquiry.component';

describe('PurchaseReturnEnquiryComponent', () => {
  let component: PurchaseReturnEnquiryComponent;
  let fixture: ComponentFixture<PurchaseReturnEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseReturnEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReturnEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
