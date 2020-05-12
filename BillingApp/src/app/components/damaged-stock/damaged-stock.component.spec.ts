import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedStockComponent } from './damaged-stock.component';

describe('DamagedStockComponent', () => {
  let component: DamagedStockComponent;
  let fixture: ComponentFixture<DamagedStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagedStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
