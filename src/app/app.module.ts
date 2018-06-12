import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home'
import { Information1Component } from './pages/information1/information1'
import { Information2Component } from './pages/information2/information2'


const routes: Routes = [
  { path: '',  redirectTo: '/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'information-1', component: Information1Component },
  { path: 'information-2', component: Information2Component },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Information1Component,
    Information2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
