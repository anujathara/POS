import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesItemEnquiryComponent } from './sales-item-enquiry.component';

describe('SalesItemEnquiryComponent', () => {
  let component: SalesItemEnquiryComponent;
  let fixture: ComponentFixture<SalesItemEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesItemEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesItemEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
