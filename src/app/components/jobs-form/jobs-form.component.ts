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


  constructor(private servicos: AxiosService, private router:ActivatedRoute ) { }

  ngOnInit(): void {

    this.idUpdate = this.router.snapshot.paramMap.get('id');
    this.servicos.buscaUpdateJobs(this.idUpdate).subscribe((res)=>{
      console.log(res)
        this.userForm.patchValue({
          nome: res.data[0].nome,
          usuario: res.data[0].usuario,
          status: res.data[0].status,
          recorrencia: res.data[0].tipo_recorrencia,
          valor: res.data[0].valor_recorrencia,
          caso: res.data[0].caso
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
        if(res.message == 'jobs não encontrado'){
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ops, job não existe.',
            showConfirmButton: false,
            timer: 1500
          })
        }else{

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Job editado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })
        }


      })



    }else{
      console.log('erro')
    }
  }



}
