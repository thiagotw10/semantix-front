import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    JobsComponent,
    UsuariosFormComponent,
    JobsFormComponent,
    LoginComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
