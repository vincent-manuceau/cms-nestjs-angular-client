import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<any[]> | undefined;

 // articles$ ;//= null;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.articles$ = this.httpClient.get<any[]>('http://127.0.0.1:3000/articles')
    //this.articles$ = this.httpClient.get()
  }

  reloadArticles(deletionSuccess:boolean){
    console.log("deletionSuccess", deletionSuccess);
    this.articles$ = this.httpClient.get<any[]>('http://127.0.0.1:3000/articles')
  }
}
