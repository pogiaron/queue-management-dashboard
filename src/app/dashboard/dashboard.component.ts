import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BatchProcessSummary, BatchProcessSummaryComponent } from './batch-process-summary/batch-process-summary.component';

export interface DashboardVM {
  totalBatchProcesses: number;

}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, BatchProcessSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  batchInRunning: BatchProcessSummary = {
    date: '11/01/2000 08:50',
    name: 'Lorem Ipsum',
    uuid: '9bc5d141-a166-4652-98c8-84268cd5ec95',
    failedJobCount: 10,
    pendingJobCount: 10,
    totalJobCount: 10,
  };
  lastBatch: BatchProcessSummary = {
    date: '11/01/2000 07:50',
    name: 'Lorem Ipsum 2',
    uuid: '9bc5d141-a166-4652-98c8-84268cd5ec95',
    failedJobCount: 20,
    pendingJobCount: 0,
    totalJobCount: 2,
  };
}
