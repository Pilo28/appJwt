import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

onSubmit(): void {
  this.authService.login(this.username, this.password).subscribe({
    next: () => this.router.navigate(['/']),
    error: err => {
      this.error = err;
      console.error('Login failed:', err);
    }

  })
}

}
