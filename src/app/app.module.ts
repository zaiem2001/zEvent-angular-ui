import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventComponent } from './components/event/event.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { InvitesComponent } from './components/invites/invites.component';
import { AuthInterceptor } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ExploreComponent,
    EventDetailsComponent,
    DashboardComponent,
    EventComponent,
    SidebarComponent,
    UserAccountComponent,
    CreateEventComponent,
    InvitesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
