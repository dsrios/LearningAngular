import { Injectable } from '@angular/core';

// Necesarios para evitar que el usuario navegue por path a la pagina bloqueada
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
        } from '@angular/router';

// Servicio
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    console.log(next);

      if ( this.auth.isAuthenticated() ) {
        console.log('Paso el Guard');
        return true;
      } else {
        console.error('bloqueado por el guard');
        return false;
      }
    }

}
