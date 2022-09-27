import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora';
import { TarefaRoutes } from './tarefas';
import { SignInComponent } from './components/sign-in';
import { SignUpComponent } from './components/sign-up';
import { DashboardComponent } from './components/dashboard';
import { ForgotPasswordComponent } from './components/forgot-password';
import { VerifyEmailComponent } from './components/verify-email';
import { AuthGuard } from './shared/guard';

export const routes: Routes = [
	{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'profile', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  ...DashboardRoutes,
  ...CalculadoraRoutes,
  ...TarefaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
