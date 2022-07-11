import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://127.0.0.1:3000'
  tokenKey = 'cms-nestjs'
  private token = null ;

  constructor(private httpClient:HttpClient) { }

  register(credentials:any){
    const fullURL = `${this.baseURL}/users/register`;
    this.httpClient.post<any>(fullURL, credentials).subscribe(createdUser => {
      console.log('createdUser',createdUser)
    });
  }

  login(credentials:any){
    const fullURL = `${this.baseURL}/auth/login`;
    this.httpClient.post<any>(fullURL,credentials).subscribe(serverObject => {
      console.log('access_token', serverObject);
      this.token = serverObject.access_token ;
      localStorage.setItem(this.tokenKey,serverObject.access_token)
    })
  }

  decodePayloadToken(token:string){
    const payload = JSON.parse(atob(token.split('.')[1]))
    //console.log(payload)
    return payload
  }

  get isAdmin(){
    if (!this.token){
      return false
    }
    const payload = this.decodePayloadToken(this.token);
    return payload.role === "admin"
  }
}
