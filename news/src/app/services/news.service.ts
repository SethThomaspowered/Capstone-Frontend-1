import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getUSANews() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=1a8aac7473ea4b0196a149454361d807`);
  }
}