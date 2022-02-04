import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getUSANews() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7a73d7a8b70b479095438788dc9cfe1f`);
  }
}