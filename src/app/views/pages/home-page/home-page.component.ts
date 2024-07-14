import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/auth/services/auth.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  role: string | null | undefined;
  isLoggedIn: boolean | undefined;

  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.role = this.isLoggedIn ? this.authService.getUserRole() : null;
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.role = null;
    this.notificationService.showSuccess('Logout exitoso');
  }
}
