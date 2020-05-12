import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnEnquiryComponent } from './sales-return-enquiry.component';

describe('SalesReturnEnquiryComponent', () => {
  let component: SalesReturnEnquiryComponent;
  let fixture: ComponentFixture<SalesReturnEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReturnEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
