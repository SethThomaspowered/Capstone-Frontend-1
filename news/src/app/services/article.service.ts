import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient) {}

    public getArticles(): Observable<any> {
      return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=1a8aac7473ea4b0196a149454361d807`);
    }

   
}
