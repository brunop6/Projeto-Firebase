import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { ListarTarefaComponent } from './listar';
import { AuthGuard } from './../shared/guard/auth.guard';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
		canActivate: [ AuthGuard ]
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
		canActivate: [ AuthGuard ]
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
		canActivate: [ AuthGuard ]
  }
];