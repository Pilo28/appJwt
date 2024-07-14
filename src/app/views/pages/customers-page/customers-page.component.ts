import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers/customers.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.scss'
})
export class CustomersPageComponent {
  customers: string[] = [];
  private customersService = new CustomersService();

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        console.log('Customers data:', data);
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }
}
