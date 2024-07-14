import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NotificationService } from '../../../shared/services/notification.service'; 

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const jwtHelper = new JwtHelperService();
  const notificationService = inject(NotificationService);

  const token = localStorage.getItem('token');
  
  if (authService.isLoggedIn() && token) {
    try {
      const decodedToken = jwtHelper.decodeToken(token);
      const userrole = decodedToken?.role || [];

      const expectedrole = route.data['role'];

      if (expectedrole.some((role: any) => userrole.includes(role))) {
        return true;
      } else {
        notificationService.showError('No tienes permisos para acceder a esta página.');
        router.navigate(['/']);
        return false;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      router.navigate(['/auth/login']);
      return false;
    }
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
