import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { UserService } from '../services/user.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  articles: Article[] | undefined;
  news: any;
  

  constructor(private userService: UserService, private newsService: NewsService) {
    this.newsService.getUSANews().subscribe(n => {
      this.news = n;
      console.log(this.news);
    })
   }
   

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );    
  }
  
}
