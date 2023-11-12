import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/shared/providers/entities/job.service';
import { ModalService } from 'src/app/shared/providers/modal.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  params = {
    count: null,
    next: null,
    previous: null,
    page: null,
  }
  constructor(private jobService : JobService,
    private modalService: ModalService) { }

  ngOnInit() {
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
    let dialogRef = this.modalService.openJobModal(job);
    dialogRef.afterClosed().subscribe(res=>{
      this.getJobs();
    });
  }


  deleteJob(id:number){
    this.jobService.delete(id).subscribe(res=>{
      this.getJobs();
    }, err=>{
      console.log(err);
    })
  }

  handlePageEvent($event){
    this.params.page = $event.pageIndex + 1;
    this.getJobs();
  }
}
