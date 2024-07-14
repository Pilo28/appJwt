import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
username: string = '';
password: string = '';
error: string | null = null;

private authService = inject(AuthService);
private router = inject(Router);
private notificationService = inject(NotificationService);

onSubmit(): void {
  this.authService.login(this.username, this.password).subscribe({
    next: () => {
      this.router.navigate(['/']);
      this.notificationService.showSuccess('Login exitoso');
    },
    error: err => {
      this.error = err;
      this.notificationService.showError('Login fallido: ' + err.message);
      console.error('Login fallido:', err);
    }
  })
}

}
