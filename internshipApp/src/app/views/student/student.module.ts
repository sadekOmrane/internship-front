import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentRoutes } from './student.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutes
  ],
  declarations: [
    StudentComponent,
    JobsComponent,
    JobDetailsComponent,
    FiltersComponent
  ],
  exports: [
    StudentComponent,
  ]
})
export class StudentModule { }
