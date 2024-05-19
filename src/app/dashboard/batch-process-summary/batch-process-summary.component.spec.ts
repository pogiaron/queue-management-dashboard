import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchProcessSummaryComponent } from './batch-process-summary.component';

describe('BatchProcessSummaryComponent', () => {
  let component: BatchProcessSummaryComponent;
  let fixture: ComponentFixture<BatchProcessSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchProcessSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchProcessSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
