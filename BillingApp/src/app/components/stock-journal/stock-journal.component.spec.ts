import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockJournalComponent } from './stock-journal.component';

describe('StockJournalComponent', () => {
  let component: StockJournalComponent;
  let fixture: ComponentFixture<StockJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
