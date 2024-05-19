import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

export interface BatchProcessSummary {
  date: string;
  name: string;
  uuid: string;
  totalJobCount: number;
  pendingJobCount: number;
  failedJobCount: number;
}


@Component({
  selector: 'app-batch-process-summary',
  standalone: true,
  imports: [CardModule],
  templateUrl: './batch-process-summary.component.html',
  styleUrl: './batch-process-summary.component.scss'
})
export class BatchProcessSummaryComponent {
  @Input() batchProcessSummary!: BatchProcessSummary
}
