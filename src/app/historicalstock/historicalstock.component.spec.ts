import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalstockComponent } from './historicalstock.component';

describe('HistoricalstockComponent', () => {
  let component: HistoricalstockComponent;
  let fixture: ComponentFixture<HistoricalstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalstockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
