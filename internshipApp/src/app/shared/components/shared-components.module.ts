import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JobModalComponent } from './job-modal/job-modal.component';
import { SharedMaterialModule } from '../shared-material.module';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent,
    JobModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    JobModalComponent,
    LoginComponent,
    RegisterComponent
  ],
})
export class SharedComponentsModule { }
