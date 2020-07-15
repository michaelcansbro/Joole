import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { ResultsHeaderComponent } from './results-header/results-header.component';
import { ResultsSideBarComponent } from './results-side-bar/results-side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    RegisterComponent,
    ResultsComponent,
    ResultsHeaderComponent,
    ResultsSideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
