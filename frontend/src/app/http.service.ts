import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http :HttpClient ) { }
  getPosts()
  {
  return this.http.get('https://jsonplaceholder.typicode.com/posts');

  }
  postData(data)
  {
  return  this.http.post<any>('http://localhost:5000/saveData', { title: data })
  }
}
