import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'split-container'
  },
  {
    path: 'split-container',
    loadChildren: () => import('./split-container-demo/split-container-demo.module').then(m => m.SplitContainerDemoModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
