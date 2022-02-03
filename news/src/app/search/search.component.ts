import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  category: string = "";
  news: any;

  constructor(private http: HttpClient) { }

  findNews(category: string){
    this.http
    .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1a8aac7473ea4b0196a149454361d807`)
    .subscribe((response) => {
      console.log(response);
      this.news = response;
    });    
    
  }

  findGenNews(){        
    this.findNews("general");    
  }

  findBusNews(){        
    this.findNews("business");    
  }

  findTecNews(){        
    this.findNews("technology");    
  }

  findSpoNews(){        
    this.findNews("sports");    
  }

  findSciNews(){        
    this.findNews("science");    
  }

  findHeaNews(){        
    this.findNews("health");    
  }

  findEntNews(){        
    this.findNews("entertainment");    
  }

  ngOnInit(): void {
  }

}
