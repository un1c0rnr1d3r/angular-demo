import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './views/app/app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { State } from './services/state';
import { ClaimsComponent } from './views/claims/claims.component';
import { LogoutComponent } from './views/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    ClaimsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    AuthService,
    State
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
