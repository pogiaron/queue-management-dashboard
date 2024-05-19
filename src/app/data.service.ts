import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface BatchProcess {
  name: string;
  uuid: string;
  status: 'COMPLETED' | 'ERROR' | 'RUNNING';
  totalJobCount: number;
  pendingJobCount: number;
  failedJobCount: number;
  cancelledAt: string;
  createdAt: string;
  finishedAt: string;
  jobs: Job[];
}

export interface Job {
  id: string;
  uuid: string;
  payload: string;
  failedAt: string
  status: 'FAILED' | 'NOT_STARTED' | 'FINISHED'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getBatchProcessSummary$() {}

  getBatchProcessList$() {
    return of(
      [
        {
          "name": "Lorem Ipsum ",
          "uuid": "122313242",
          "status": "COMPLETED" as const,
          "totalJobCount": 10,
          "pendingJobCount": 0,
          "failedJobCount": 1,
          "cancelledAt": "",
          "createdAt": "20/01/2000 08:50",
          "finishedAt": "20/01/2000 09:50",
          "jobs": [{
            id: '1',
            uuid: '122313242',
            payload: 'payload_test.xlx',
            failedAt: '20/01/2000 09:50',
            status: 'FAILED' as const
          },
          {
            id: '2',
            uuid: '122313242',
            payload: 'payload_test2.xlx',
            failedAt: '',
            status: 'FINISHED' as const
          },
          {
            id: '2',
            uuid: '122313242',
            payload: 'payload_test2.xlx',
            failedAt: '',
            status: 'FINISHED' as const
          },
          {
            id: '3',
            uuid: '122313242',
            payload: 'payload_test2.xlx',
            failedAt: '',
            status: 'FINISHED' as const
          },
          {
            id: '4',
            uuid: '122313242',
            payload: 'payload_test2.xlx',
            failedAt: '',
            status: 'FINISHED' as const
          }]
        },
        {
          "name": "Lorem Ipsum 2",
          "uuid": "122313242",
          "status": "COMPLETED" as const,
          "totalJobCount": 10,
          "pendingJobCount": 0,
          "failedJobCount": 1,
          "cancelledAt": "",
          "createdAt": "20/01/2000 08:50",
          "finishedAt": "20/01/2000 09:50",
          "jobs": []
        },
        {
          "name": "Lorem Ipsum 3",
          "uuid": "122313242",
          "status": "COMPLETED" as const,
          "totalJobCount": 10,
          "pendingJobCount": 0,
          "failedJobCount": 1,
          "cancelledAt": "",
          "createdAt": "20/01/2000 08:50",
          "finishedAt": "20/01/2000 09:50",
          "jobs": []
        },
      ]
    )
  }

  getBatchProcess$() {

  }

  getFilesForBatchProcess$() {}

  getAllFiles$() {
    return of()
  }
}
