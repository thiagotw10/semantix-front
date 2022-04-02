import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const token = window.localStorage.getItem('logintw10');
    if(token == 'logado') {
      return true;

    }else{

      this.router.navigate(['']);
      return false;
    }


  }

}
