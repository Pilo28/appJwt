import { Component, inject } from '@angular/core';
import { CustomersService } from '../../services/customers/customers.service';
import { User } from '../../interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.scss'
})
export class CustomersPageComponent {
  customers: User[] = [];
  error: string | null = null;
  private subscriptions: Subscription | null = null;

  private customersService = inject(CustomersService);

  ngOnInit(): void {
   this.loadCustomers();
  }

  ngOnDestroy(): void {
    this.cleanUpSubscription();
  }
  
  private loadCustomers(): void {
    this.subscriptions =  this.customersService.getCustomers().subscribe({
      next: (data:User[]) => {
        this.customers = data;
        console.log('Customers data:', data);     },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  private cleanUpSubscription(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
