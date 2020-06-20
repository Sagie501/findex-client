import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/containers/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MyItemsComponent } from './components/home/components/my-items/containers/my-items.component';
import { StatisticsComponent } from './components/home/components/statistics/statistics.component';
import { GiveSomethingComponent } from './components/home/components/give-something/give-something.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'my-items', component: MyItemsComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'give-something', component: GiveSomethingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
