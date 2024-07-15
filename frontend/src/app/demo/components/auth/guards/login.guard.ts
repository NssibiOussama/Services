import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["home"]);
      return false;
    }
    return true;
  }
}
