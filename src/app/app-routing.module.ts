import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { canActivateRoute } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, canActivate: [canActivateRoute] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [canActivateRoute],
  },
  { path: 'explore', component: ExploreComponent },
  { path: 'explore/:eventId', component: EventDetailsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [canActivateRoute],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
