import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'upload'
}, 
{
  path: 'upload',
  component: UploadComponent
},
{
  path: 'history',
  component: HistoryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
