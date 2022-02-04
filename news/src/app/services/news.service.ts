import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getUSANews() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f0b6fb88a0754b51a4036904b433d5b4`);
  }
}