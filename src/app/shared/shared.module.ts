import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent,
  ],
  declarations: [
    NavigationComponent,
  ]
})
export class SharedModule { }
