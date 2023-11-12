import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobModalComponent } from '../components/job-modal/job-modal.component';
import { Job } from '../models/job';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog ) { }


  openJobModal(job?:Job) {
    const dialogRef = this.dialog.open(JobModalComponent,{
      data: job,
    });
    return dialogRef;
  }


  openLoginModal(showMsg=false) {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: showMsg
    });
    return dialogRef;
  }

  openRegisterModal() {
    const dialogRef = this.dialog.open(RegisterComponent);
    return dialogRef;
  }

}
