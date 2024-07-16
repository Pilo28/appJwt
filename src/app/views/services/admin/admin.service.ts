import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

private urlAdmin = environments.urlAdmin
private http = inject(HttpClient);

getAdmin(): Observable<User[]> {
  return this.http.get<User[]>(this.urlAdmin);
}
}
