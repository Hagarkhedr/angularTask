import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   posts:object 
  constructor(private httpService : HttpService) { }

  ngOnInit(){
   this.httpService.getPosts().subscribe(data =>
    {  console.log(data)
      this.posts = data ; 
    });
  }

}
