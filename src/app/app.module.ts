import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

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
  ],

  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
