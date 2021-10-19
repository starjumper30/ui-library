import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataGridDemoComponent } from './data-grid-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DataGridDemoComponent
  }
];

@NgModule({
  declarations: [
    DataGridDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DataGridDemoModule { }
