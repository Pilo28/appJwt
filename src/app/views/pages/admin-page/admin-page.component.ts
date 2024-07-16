import { Component, inject } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
 admins: User[] = [];
 private subscriptions: Subscription | null = null;

 private adminService = inject(AdminService);
 private route = inject(Router);

 ngOnInit(): void {
  this.loadAdmins();
}

 ngOndestroy(): void {
  this.cleanUpSubscriptions();
 }

 private loadAdmins(): void {
  this.subscriptions =  this.adminService.getAdmin().subscribe({
    next: (data: User[]) => {
      this.admins = data;
    },
    error: (err) => {
      console.error('Error fetching customers:', err);
    }
  });
}

private cleanUpSubscriptions(): void {
  if (this.subscriptions) {
    this.subscriptions.unsubscribe();
  }
}
             
  goDetail(admin: any): void {
    this.route.navigate(['home/admin', admin]);
  }      

}           
