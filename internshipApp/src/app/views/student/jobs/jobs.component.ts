import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { User } from 'src/app/shared/models/user';
import { JobService } from 'src/app/shared/providers/entities/job.service';
import { ModalService } from 'src/app/shared/providers/modal.service';
import { AuthService } from 'src/app/shared/providers/security/auth.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
})
export class JobsComponent implements OnInit {
  me: User;
  jobs: Job[] = [];
  params = {
    count: null,
    next: null,
    previous: null,
    page: null,
  }
  constructor(private jobService : JobService,
    private modalService: ModalService,
    private authService : AuthService) { }

  ngOnInit() {
    this.me = this.authService.getMeFromCash();
    this.authService.getUserSubjet().subscribe((res:any)=>{
      this.me = res;
    });
    this.getJobs();
  }
  getJobs(){
    this.jobService.get(null, this.params).subscribe((res:any)=>{
      this.jobs = res.results;
      this.params.next = res.next;
      this.params.previous = res.previous;
      this.params.count = res.count;
    },err=>{
      console.log(err);
    })
  }

  openJobModal(job?:Job){
    if(this.me){
      let dialogRef = this.modalService.openJobModal(job);
      dialogRef.afterClosed().subscribe(res=>{
        this.getJobs();
      });
    }else{
      this.modalService.openLoginModal(true);
    }

  }


  deleteJob(id:number){
    if(this.me){
      this.jobService.delete(id).subscribe(res=>{
      this.getJobs();
    }, err=>{
      console.log(err);
    })
    }
    else{
      this.modalService.openLoginModal(true);
    }
  }

  handlePageEvent($event){
    this.params.page = $event.pageIndex + 1;
    this.getJobs();
  }
}
