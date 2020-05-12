import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemEnquiryComponent } from './purchase-item-enquiry.component';

describe('PurchaseItemEnquiryComponent', () => {
  let component: PurchaseItemEnquiryComponent;
  let fixture: ComponentFixture<PurchaseItemEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseItemEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseItemEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
