import { Component, OnInit } from '@angular/core';
import { FileHistoryService } from '../file-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  pastFiles: Array<string> = [];
  constructor(private files: FileHistoryService) {}

  ngOnInit(): void {
    this.files.getFiles().subscribe(
      (resp) => {
        this.pastFiles = resp;
      },
      (error: any) => {}
    );
  }
  removeFiles() {
    this.files.clearFiles();
    this.ngOnInit();
  }
}
