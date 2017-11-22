import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SharedModule } from './../shared/shared.module';
import { CommentsService } from './services/comments.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FirstComponent,
  ],
  providers: [
    CommentsService,
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
