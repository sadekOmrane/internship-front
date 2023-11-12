import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentModule } from './student/student.module';
import { CompanyModule } from './company/company.module';
import { AdminModule } from './admin/admin.module';
import { ViewsComponent } from './views.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    StudentModule,
    CompanyModule,
    AdminModule,
    RouterModule
  ],
  declarations: [ViewsComponent],
  exports:[
    ViewsComponent
  ]
})
export class ViewsModule { }
