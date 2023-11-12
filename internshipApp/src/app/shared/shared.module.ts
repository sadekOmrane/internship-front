import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedMaterialModule,
    SharedComponentsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    SharedMaterialModule,
    SharedComponentsModule
  ],
})
export class SharedModule { }
