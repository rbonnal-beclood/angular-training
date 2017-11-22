import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first/first.component';
import { SecondComponent } from './second/second/second.component';
import { ThirdComponent } from './third/third/third.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FirstModule,
    SecondModule,
    ThirdModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
