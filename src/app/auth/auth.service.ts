import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://127.0.0.1:3000/users'
  constructor(private httpClient:HttpClient) { }

  register(credentials:any){
    const fullURL = `${this.baseURL}/register`;
    this.httpClient.post<any>(fullURL, credentials).subscribe(createdUser => {
      console.log('createdUser',createdUser)
    });
  }
}
