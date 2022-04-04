import { Usermodel } from './../../Models/usermodel';
import { Component, OnInit } from '@angular/core';
import { AxiosService } from './../../servicos/Axios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {



  dados: any;
  public lista: Array<Usermodel> = [];
  public page = 1;
  public pageSize = 5;
  constructor(private servicos: AxiosService ) { }


  ngOnInit(): void {
    this.servicos.usuarios().subscribe((res)=>{
      console.log(res, "res==>");

      this.dados = res.data;
      this.lista = this.dados;
    })
  };


  // functions

  delete(id:any){
    Swal.fire({
      title: 'Deseja deletar o usuário ' + id + '?',
      text: "Cuidado, não pode ser refeito.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.servicos.usuariosDelete(id).subscribe((res)=>{

          this.servicos.usuarios().subscribe((res)=>{
            this.dados = res.data;
            this.lista = this.dados;
          })
        })



        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário deletado com sucesso!!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })




  }

}
