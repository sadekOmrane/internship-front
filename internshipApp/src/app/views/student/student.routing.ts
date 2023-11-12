import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
   },
   {
    path: 'student/:id',
    component: JobDetailsComponent,
   },
];

export const StudentRoutes = RouterModule.forChild(routes);
