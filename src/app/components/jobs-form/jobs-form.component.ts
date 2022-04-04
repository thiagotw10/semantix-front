import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AxiosService } from './../../servicos/Axios.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent implements OnInit {


  idUpdate:any;
  intervalos:any = false;
  horarios:any = false;
  hamburguer:any = false;


  

  constructor(private servicos: AxiosService, private router:ActivatedRoute ) { }

  ngOnInit(): void {

    this.idUpdate = this.router.snapshot.paramMap.get('id');
    this.servicos.buscaUpdateJobs(this.idUpdate).subscribe((res)=>{
      console.log(res)
        this.userForm.patchValue({
          nome: res.data.nome,
          usuario: res.data.usuario,
          status: res.data.status,
          recorrencia: res.data.recorrencia,
          valor: res.data.valor,
          caso: res.data.caso
        })
    })

  }



  userForm = new FormGroup({
    'nome' : new FormControl('', Validators.required),
    'usuario' : new FormControl('', Validators.required),
    'status' : new FormControl('', Validators.required),
    'recorrencia' : new FormControl('', Validators.required),
    'valor' : new FormControl('', Validators.required),
    'caso' : new FormControl('', Validators.required)
  })


  menu(){

    if(!this.hamburguer == true){
      this.hamburguer = true
    }else if(!this.hamburguer == false){
      this.hamburguer = false
    }
      
  }

  userSubmit(){

    if(this.userForm.valid){
      console.log(this.userForm.value)

      this.servicos.jobsAdd(this.userForm.value).subscribe((res)=>{

          this.userForm.reset();

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Job cadastrado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })

      }, (err) => {

        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Ops, job com esse nome já existe.',
          showConfirmButton: false,
          timer: 1500
        })

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

      this.servicos.jobsUpdate(this.userForm.value, this.idUpdate).subscribe((res)=>{


          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Job editado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })



      }, (err) => {

        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Ops, job com esse nome já existe.',
          showConfirmButton: false,
          timer: 1500
        })

      })



    }else{
      console.log('erro')
    }
  }


  horario(){

    if(this.userForm.value.recorrencia == 'horário fixo'){
      this.horarios = true
      this.intervalos = false;
    }else if (this.userForm.value.recorrencia == 'intervalo'){
      this.intervalos = true
      this.horarios = false;
    }else{
      this.intervalos = false;
      this.horarios = false;
    }

  }





}
