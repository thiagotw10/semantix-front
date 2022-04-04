import { AxiosService } from './../servicos/Axios.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;

  constructor(private servicos: AxiosService, private router: Router) { }

  ngOnInit(): void {
    this.login = true
  }

  userForm = new FormGroup({
    'email' : new FormControl('', Validators.required),
    'senha' : new FormControl('', Validators.required)
  })

  enviar(){

    if(this.userForm.valid){
      this.servicos.login(this.userForm.value).subscribe((res)=>{

          window.localStorage.setItem('logintw10', 'logado')

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário logado com sucesso!',
            showConfirmButton: false,
            timer: 1700
          })

          this.router.navigate(['/cms/usuarios']);






    }, (err)=>{
      
      window.localStorage.setItem('logintw10', 'deslogado')
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Email ou senha incorreta, tente novamente!',
            showConfirmButton: false,
            timer: 1700
          })
    })


    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Preencha todos os campos pfvr ..',
        showConfirmButton: false,
        timer: 1700
      })
    }


  }

}
