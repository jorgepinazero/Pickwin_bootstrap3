import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AppMaterialModule} from './material.module';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    AppMaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
