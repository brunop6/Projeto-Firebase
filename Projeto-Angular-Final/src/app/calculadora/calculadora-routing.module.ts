import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components';
import { AuthGuard } from './../shared/guard/auth.guard';
 
export const CalculadoraRoutes: Routes = [
	{ 
		path: 'calculadora', 
		component: CalculadoraComponent,
		canActivate: [ AuthGuard ]
	}
];