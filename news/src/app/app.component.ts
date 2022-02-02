import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';
import { TokenStorageService } from './services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'news';
  isLoggedIn = false;
  username?: string;

  public articles: Article[] | undefined;

  constructor(private articleService: ArticleService, private tokenStorageService: TokenStorageService) { }
  

  ngOnInit(): void {
      this.getArticles();
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        
        this.username = user.username;
      } 
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message);
        
      }
    );
  }

}
