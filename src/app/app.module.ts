import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { InterceptorService } from './core/services/interceptor.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './core/services/auth-guard.service';
/*.In our AppModule, we then need to specify the component that will serve as the entry point component for our application.
In our app.module.ts file where we import the entry component (conventionally AppComponent) and supply it as the only item
in our bootstrap array inside the NgModule configuration object. eg. bootstrap[AppComponent]*/
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
