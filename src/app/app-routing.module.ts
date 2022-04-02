import { AuthGuard } from './verificacoes/auth.guard';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [


  {path: '', component: LoginComponent},


  {
    path:'cms',
    component: NavBarComponent,
    children: [
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'jobs', component:JobsComponent},
      {path: 'jobs/add', component:JobsFormComponent},
      {path: 'usuarios/add', component:UsuariosFormComponent},
      {path: 'usuarios/:id', component:UsuariosFormComponent},
      {path: 'jobs/:id', component:JobsFormComponent}
    ],
    canActivate: [AuthGuard]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
