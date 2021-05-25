import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileHistoryService {
  historyFiles: Array<string> = [];
  constructor() {}

  setFiles(file: string) {
    this.historyFiles.push(file);
  }
  getFiles() {
    return of(this.historyFiles);
  }
  clearFiles() {
    this.historyFiles = [];
  }
}
