import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

private urlCustomers = environments.urlCustomers

private http = inject(HttpClient);

getCustomers(): Observable<User[]> {
  return this.http.get<User[]>(this.urlCustomers)
  } 
}