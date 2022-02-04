import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: any;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(n => {
      this.articles = n;
      console.log(this.articles);
    });
  };

  deleteArticle(article: Article): void {
    this.articleService.deleteArticle(article)
      .subscribe( data => {
        this.articles = this.articles.filter((a: Article) => a !== article);
      })
  };

}
