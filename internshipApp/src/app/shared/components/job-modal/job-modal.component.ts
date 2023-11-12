import { Skill } from '../../models/skill';
import { Component, Inject, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../providers/entities/company.service';
import { SkillService } from '../../providers/entities/skill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../providers/entities/job.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
})
export class JobModalComponent implements OnInit {
  companies: Company[]= [];
  skills: Skill[] = [];
  jobForm:FormGroup;

  constructor(private companyService: CompanyService,
    private skillService: SkillService,
    private fb:FormBuilder,
    private jobService: JobService,
    @Inject(MAT_DIALOG_DATA) public data : Job,
    ) { }

  ngOnInit() {
    this.getCompanies();
    this.getSkills();
    this.buildForm(this.data);
  }

  buildForm(data?){
    console.log(data)
    this.jobForm = this.fb.group({
      id: [data ? data.id : null, []],
      title: [data ? data.title : null, [Validators.required]],
      description: [data ? data.title : null, [Validators.required]],
      company_id: [data ? data.company.id : null, [Validators.required]],
      skill_ids: [null, []],
      candidate_ids: [[], []],
      status: [true, []],
    })

    if (data){
      this.jobForm.get('skill_ids').setValue(this.getSkillIds(data.skills));
      console.log()
    }
  }
  getCompanies(){
    this.companyService.get().subscribe((res:any)=>{
      this.companies = res.results;
    },err=>{
      console.log(err);
    })
  }

  getSkills(){
    this.skillService.get().subscribe((res:any)=>{
      this.skills = res.results;
    },err=>{
      console.log(err);
    })
  }

  submit(){
    const formData = this.jobForm.getRawValue();
    if(this.data){
      this.jobService.put(this.data.id, formData).subscribe((res:any)=>{
      },err=>{
        console.log(err);
      })
    }else{
      this.jobService.post(formData).subscribe((res:any)=>{
        console.log(res.results);
      },err=>{
        console.log(err);
      })
    }

  }

  getSkillIds(skills:Skill[]){
    let ids : number[] = []
    skills?.forEach(element => {
      ids.push(element.id)
    });
    return ids;
  }

}
