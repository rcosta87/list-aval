import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { LoggedinService } from './core/pages/login-page/loggein.service';
import { LoggedinStudentService } from './core/pages/login-page/loggein-student';
import { LoggedinServiceEvaluator } from './core/pages/login-page/loggein-evaluator';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'login/:to', component: LoginPageComponent},
  {path: 'aluno', loadChildren: () => import('./student/student.module').then(m => m.StudentModule), canLoad: [LoggedinStudentService], canActivate: [LoggedinStudentService]},
  {path: 'professor', loadChildren: () => import('./professor/professor.module').then(m => m.ProfessorModule), canLoad: [LoggedinService], canActivate: [LoggedinService]},
  {path: 'avaliador', loadChildren: () => import('./evaluator/evaluator.module').then(m => m.EvaluatorModule), canLoad: [LoggedinServiceEvaluator], canActivate: [LoggedinServiceEvaluator]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
