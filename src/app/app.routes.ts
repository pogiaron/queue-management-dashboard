import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileListComponent } from './file-list/file-list.component';
import { BatchProcessComponent } from './batch-process/batch-process.component';

export const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "batch-jobs", component: BatchProcessComponent},
  { path: "files", component: FileListComponent},
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
];
