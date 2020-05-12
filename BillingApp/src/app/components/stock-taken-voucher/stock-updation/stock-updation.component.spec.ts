import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUpdationComponent } from './stock-updation.component';

describe('StockUpdationComponent', () => {
  let component: StockUpdationComponent;
  let fixture: ComponentFixture<StockUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
