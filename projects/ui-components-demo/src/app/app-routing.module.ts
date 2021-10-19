import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'split-container',
    loadChildren: () => import('./split-container-demo/split-container-demo.module').then(m => m.SplitContainerDemoModule )
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms-demo/forms-demo.module').then(m => m.FormsDemoModule )
  },
  {
    path: 'data-grid',
    loadChildren: () => import('./data-grid-demo/data-grid-demo.module').then(m => m.DataGridDemoModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
