import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileHistoryService } from '../file-history.service';
import { TreeViewComponent } from '../modals/tree-view/tree-view.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  fileUpload = new FormControl({ value: '', disabled: true });
  files: any;
  progressPercent: number = 0;
  showProgress: boolean = false;
  showSuccess: boolean = false;

  constructor(
    private historyService: FileHistoryService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  selectFile() {
    const dialogRef = this.dialog.open(TreeViewComponent, {
      panelClass: 'dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fileUpload.setValue(result);
      } else {
        return;
      }
    });
    this.showSuccess = false;
  }
  upload() {
    this.showProgress = true;
    const timer = setInterval(() => {
      this.showProgress = false;
      this.showSuccess = true;
      this.historyService.setFiles(this.fileUpload.value);
      clearInterval(timer);
    }, 5000);
  }
}
