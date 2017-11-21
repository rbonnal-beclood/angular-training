import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    FirstComponent,
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
