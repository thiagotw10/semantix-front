import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Usuário deslogado com sucesso!!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['']);
    window.localStorage.clear();
  }

}
