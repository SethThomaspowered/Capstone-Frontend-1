import { Component, OnInit } from '@angular/core';
import { SaveService } from '../services/save.service';

@Component({
  selector: 'app-savearticles',
  templateUrl: './savearticles.component.html',
  styleUrls: ['./savearticles.component.css']
})
export class SaveArticlesComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private saveService: SaveService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // this.saveService.savearticles(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }

}
