import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/student/student.module').then(m => m.StudentModule)
  },
];

export const AppRoutes = RouterModule.forChild(routes);
