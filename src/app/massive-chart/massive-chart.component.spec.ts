import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveChartComponent } from './massive-chart.component';

describe('MassiveChartComponent', () => {
  let component: MassiveChartComponent;
  let fixture: ComponentFixture<MassiveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassiveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
