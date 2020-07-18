import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/containers/login/login.component';
import { SignUpComponent } from './core/containers/sign-up/sign-up.component';
import { HomeComponent } from './core/containers/home/home.component';
import { FindexHomeComponent } from './core/components/findex-home/findex-home.component';
import { GiveSomethingComponent } from './core/components/give-something/give-something.component';
import { TakeSomethingComponent } from './core/components/take-something/take-something.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { StatisticsComponent } from './features/statistics/containers/statistics/statistics.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { MyItemsComponent } from './core/components/my-items/containers/my-items.component';
import { MessagesComponent } from './core/components/messages/containers/messages.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'home',
    redirectTo: '/home/findex',
    pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'findex', component: FindexHomeComponent },
      { path: 'my-items', component: MyItemsComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'give-something', component: GiveSomethingComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'take-something', component: TakeSomethingComponent },
      { path: 'contact-us', component: ContactUsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
