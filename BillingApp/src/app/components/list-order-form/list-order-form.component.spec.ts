import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderFormComponent } from './list-order-form.component';

describe('ListOrderFormComponent', () => {
  let component: ListOrderFormComponent;
  let fixture: ComponentFixture<ListOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
