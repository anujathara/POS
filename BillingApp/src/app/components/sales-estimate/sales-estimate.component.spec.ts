import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEstimateComponent } from './sales-estimate.component';

describe('SalesEstimateComponent', () => {
  let component: SalesEstimateComponent;
  let fixture: ComponentFixture<SalesEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
