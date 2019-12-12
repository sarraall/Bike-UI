import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
 
    constructor(private authService : AuthService){
    }
    
    canActivate() {
        if(this.authService.isAuthenticated()){
            return true;
        }else {
            this.authService.login();
        }
      }
  
}