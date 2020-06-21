import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/containers/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MyItemsComponent } from './components/home/components/my-items/containers/my-items.component';
import { StatisticsComponent } from './components/home/components/statistics/statistics.component';
import { GiveSomethingComponent } from './components/home/components/give-something/give-something.component';
import { MessagesComponent } from './components/home/components/messages/containers/messages.component';
import { TakeSomethingComponent } from './components/home/components/take-something/take-something.component';
import { FindexHomeComponent } from './components/home/components/findex-home/findex-home.component';
import { ContactUsComponent } from './components/home/components/contact-us/contact-us.component';


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
