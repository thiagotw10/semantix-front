import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AxiosService } from './../../servicos/Axios.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {


  idUpdate:any;


  constructor(private servicos: AxiosService, private router:ActivatedRoute ) { }

  ngOnInit(): void {

    this.idUpdate = this.router.snapshot.paramMap.get('id');
    this.servicos.buscaUpdate(this.idUpdate).subscribe((res)=>{
      console.log(res)
        this.userForm.patchValue({
          nome: res.data[0].nome,
          email: res.data[0].email,
          senha: res.data[0].senha,
          telefone: res.data[0].telefone
        })
    })

  }



  userForm = new FormGroup({
    'nome' : new FormControl('', Validators.required),
    'email' : new FormControl('', Validators.required),
    'senha' : new FormControl('', Validators.required),
    'telefone' : new FormControl('', Validators.required)
  })

  userSubmit(){

    if(this.userForm.valid){
      console.log(this.userForm.value)

      this.servicos.usuariosAdd(this.userForm.value).subscribe((res)=>{
        if(res.message == 'nome ou email já existe.'){
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ops, usuário ou email já existem.',
            showConfirmButton: false,
            timer: 1500
          })
        }else{

          this.userForm.reset();

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário cadastrado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })
        }


      })
    }else{
      console.log('prencha todos os campos ...')
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Ops, todos os campos são obrigátorios.',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  userSubmitUpdate(){
    if(this.userForm.valid){

      this.servicos.usuariosUpdate(this.userForm.value, this.idUpdate).subscribe((res)=>{
        if(res.message == 'nome ou email já existe.'){
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ops, usuário ou email já existem.',
            showConfirmButton: false,
            timer: 1500
          })
        }else{

          this.userForm.reset();

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário cadastrado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })
        }


      })



    }else{

    }
  }

}
