import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { HomeComponent } from './homecomponent/home.component';
import { AboutComponent } from './aboutcomponent/about.component';
import { ContactComponent } from './contactcomponent/contact.component';


const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }