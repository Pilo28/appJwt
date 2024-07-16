import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrl: './admin-detail.component.scss'
})
export class AdminDetailComponent {
name: string = '';
private route = inject(ActivatedRoute);

ngOnInit(): void {
  this.route.params.subscribe({
    next: (params) => {
      this.name = params['name'];
      console.log('Name:', this.name);
    },
    error: (err) => {
      console.error('Error fetching name:', err);
    }
  });
}

}