import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interface/IUser';
@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  
  API = 'http://localhost:3000/users';

  constructor(public http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API}`);
  }
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}/${id}`);
  }
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API}`, user);
  }
  deleteUser(id: string): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API}/${id}`);
  }
  login(email: string ): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}?email=${email}`);
  } 
}
