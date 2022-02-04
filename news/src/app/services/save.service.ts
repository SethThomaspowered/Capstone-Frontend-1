// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const SAVE_API = 'http://localhost:9092/api/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class SaveService {
//   savearticles(form: any) {
//     throw new Error('Method not implemented.');
//   }

//   constructor(private http: HttpClient) { }

//   addToMyNews(article: { title: any; description: any; url: any; urlToImage: any;}): Observable<any> {
//     console.log();
    
//     return this.http.post(SAVE_API + 'articles', {
//       title: article.title,
//       description: article.description,
//       url: article.url,
//       urlToImage: article.urlToImage
//     }, httpOptions);
//   }
  
// }