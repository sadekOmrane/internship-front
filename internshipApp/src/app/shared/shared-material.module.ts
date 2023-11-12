import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatMenuModule
  ],

})
export class SharedMaterialModule { }
