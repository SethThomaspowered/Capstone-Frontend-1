import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { SaveService } from '../services/save.service';
import { TokenStorageService } from '../services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-savearticles',
  templateUrl: './savearticles.component.html',
  styleUrls: ['./savearticles.component.css']
})
export class SaveArticlesComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  article: Article = new Article();
  // articles: Article[] | undefined;
  news: any;
  isLoggedIn = false;

  constructor(private saveService: SaveService, private newsService: NewsService,private tokenStorageService: TokenStorageService,
    private http: HttpClient,) {
      this.newsService.getUSANews().subscribe(n => {
        this.news = n;
        console.log(this.news);
      })
     }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  addNews(): void {
    this.saveService.savearticles(this.article);
    
  }

}
