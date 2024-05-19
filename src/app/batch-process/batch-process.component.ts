import { Component } from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BatchProcess, DataService } from '../data.service';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-batch-process',
  standalone: true,
  imports: [TableModule, ButtonModule, TagModule, PaginatorModule],
  templateUrl: './batch-process.component.html',
  styleUrl: './batch-process.component.scss'
})
export class BatchProcessComponent {

  batchProcesses!: BatchProcess[];

  expandedRows: Record<string, boolean> = {};

  loading: boolean = false;

  totalRecords = 20; //TODO

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBatchProcessList$().subscribe((data) => {
      this.batchProcesses = data;
      console.log(this.batchProcesses)
    });
  }

  expandAll() {
    this.expandedRows = this.batchProcesses.reduce((acc, p) => (acc[p.uuid] = true) && acc, {} as Record<string, boolean>);
  }

  collapseAll() {
    this.expandedRows = {};
  }

  getStatusSeverity(status: 'COMPLETED' | 'ERROR' | 'RUNNING') {
    switch (status) {
        case 'RUNNING':
            return 'warning';
        case 'COMPLETED':
            return 'success';
        case 'ERROR':
            return 'danger';
    }
  }
  getJobStatusSeverity(status: 'FAILED' | 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED') {
    switch (status) {
        case 'NOT_STARTED':
            return 'warning';
        case 'IN_PROGRESS':
            return 'success';
        case 'FINISHED':
            return 'success';
        case 'FAILED':
            return 'danger';
    }
  }

  loadBatchProcess(event: TableLazyLoadEvent) {
    this.loading = true;
    this.dataService.getBatchProcessList$().subscribe((data) => {
        this.batchProcesses = data;
        this.loading = false;
    });
  }
}
