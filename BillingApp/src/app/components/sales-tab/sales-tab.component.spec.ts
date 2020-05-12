import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTabComponent } from './sales-tab.component';

describe('SalesTabComponent', () => {
  let component: SalesTabComponent;
  let fixture: ComponentFixture<SalesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
