import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article.model';

const NEWS_API = 'http://localhost:9092/api/articles';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient) {}

    getArticles(): Observable<any> {
      return this.http.get('http://localhost:9092/api/articles');
    }

    deleteArticle(article: any) {
      return this.http.delete(NEWS_API + "/" + article.id);
    }
  
       
    addToMyNews(article: { title: any; description: any; url: any; urlToImage: any; }): Observable<any> {
      
      return this.http.post(NEWS_API + "articles", {
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage
      }, httpOptions);
    }
}
