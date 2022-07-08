import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseURL = 'http://127.0.0.1:3000/articles'
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  createArticle(article:Article){
      return this.httpClient.post<Article>(this.baseURL,article);
  }

  deleteArticle(article:Article){
    const fullURL = `${this.baseURL}/${article._id}`
    return this.httpClient.delete<Article>(fullURL, this.httpHeaders)
  }
}
