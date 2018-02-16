import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewComponent } from './newcomponent/new.component';
import { FooterComponent } from './footercomponent/footer.component';
import { AppRoutingModule } from './app-route.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homecomponent/home.component';
import { AboutComponent } from './aboutcomponent/about.component';
import { ContactComponent } from './contactcomponent/contact.component';
import { usersRouting } from "./users/users.routing";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
	NewComponent,
	FooterComponent,
	HomeComponent,
	AboutComponent,
	ContactComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	usersRouting,
	UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
