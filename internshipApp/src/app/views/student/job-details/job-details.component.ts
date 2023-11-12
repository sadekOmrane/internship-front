import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/shared/providers/entities/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
})
export class JobDetailsComponent implements OnInit {
  job_id?:number;
  job?:Job;
  constructor(private router: ActivatedRoute,
    private jobService: JobService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.job_id = params['id'];
      this.getJob(this.job_id);
    });
  }

  getJob(id:number){
    this.jobService.get(id).subscribe((res:any)=>{
      this.job = res;
    }, err=>{
      console.log(err);
    })
  }

}
