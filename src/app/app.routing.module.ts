import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first/first.component';
import { SecondComponent } from './second/second/second.component';
import { ThirdComponent } from './third/third/third.component';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'first', component: FirstComponent, data: { title: 'Premier onglet' } },
            { path: 'second', component: SecondComponent, data: { title: 'Second onglet' }},
            { path: 'third', component: ThirdComponent, data: { title: 'Troisième onglet' }},
            { path: '', redirectTo: 'first', pathMatch: 'full'},
        ],
    },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false} // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
