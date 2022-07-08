import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, Observable, Subscription } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  response$ : Observable<any> | null = null;
  error = null;

  constructor(private fb: FormBuilder, private articleService:ArticleService ) { }

  articleForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', [Validators.required, Validators.minLength(4) ]],
    creationDate: new Date().toISOString()
  })

  ngOnInit(): void {
  }

  async submit(){
    console.log("Article / Submit", this.articleForm.value)
    this.response$ = await this.articleService
      .createArticle(this.articleForm.value)
      .pipe(
        catchError(error => {
          this.error = error;
          return EMPTY;
        })
      )
      /*.subscribe(
        res => console.log(res)
      )*/
  }

  get title(){
    return this.articleForm.get('title')
  }

  get content(){
    return this.articleForm.get('content')
  }

}
