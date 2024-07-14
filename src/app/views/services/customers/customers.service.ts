import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

private urlCustomers = environments.urlCustomers

private http = inject(HttpClient);

getCustomers(): Observable<string[]> {
  return this.http.get<string[]>(this.urlCustomers);
}
}
