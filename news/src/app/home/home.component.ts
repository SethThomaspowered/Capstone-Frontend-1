import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { UserService } from '../services/user.service';
import { NewsService } from '../services/news.service';
import { TokenStorageService } from '../services/token-storage.service';
import { HttpClient } from '@angular/common/http';


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
  

  constructor(private userService: UserService,
    private newsService: NewsService,
    private tokenStorageService: TokenStorageService,
    private http: HttpClient) { }

 
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
    
    this.newsService.getUSANews().subscribe(n => {
      this.news = n;
      console.log(this.news);
    });
  }
  
}
