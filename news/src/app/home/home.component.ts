import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { UserService } from '../services/user.service';
import { NewsService } from '../services/news.service';
import { TokenStorageService } from '../services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { SaveService } from '../services/save.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  articles: Article[] | undefined;
  news: any;
  isLoggedIn = false;
  article: any;
  // category: string = "";

  constructor(private userService: UserService, 
              private newsService: NewsService,
              private tokenStorageService: TokenStorageService,
              private http: HttpClient,
              private saveService: SaveService) {
    this.newsService.getUSANews().subscribe(n => {
      this.news = n;
      console.log(this.news);
    })
   }
   
  //  findNews(category: string){
  //   this.http
  //   .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1a8aac7473ea4b0196a149454361d807`)
  //   .subscribe((response) => {
  //     console.log(response);
  //     this.news = response;
  //   });    
    
  // }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.isLoggedIn = !!this.tokenStorageService.getToken();    
  }
  
  addNews(): void {
    this.saveService.addToMyNews(this.article)
      };
      

}
