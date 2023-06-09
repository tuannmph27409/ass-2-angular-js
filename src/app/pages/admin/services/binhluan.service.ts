import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ibluan } from '../interface/Ibinhluan';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/binhluan';

  constructor(private http: HttpClient) { }

  getComments(productId: string): Observable<Ibluan[]> {
    return this.http.get<Ibluan[]>(`${this.apiUrl}?idpro=${productId}`);
  }

  addComment(content: string, idpro: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { content, idpro });
  }
}