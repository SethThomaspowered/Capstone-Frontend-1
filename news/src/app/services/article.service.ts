import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article.model';

const SAVE_API = 'http://localhost:9092/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient) {}

    public getArticles(): Observable<any> {
      return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=1a8aac7473ea4b0196a149454361d807`);
    }

    public deleteArticle(article: any) {
      return this.http.delete(SAVE_API + "/" + article.id);
    }
  
    public addArticle(article: any) {
      return this.http.post<Article>(SAVE_API, article);
    }
   
    public addToMyNews(article: { title: any; description: any; url: any; urlToImage: any; }): Observable<any> {
      
      return this.http.post(SAVE_API + "articles", {
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage
      }, httpOptions);
    }
}
