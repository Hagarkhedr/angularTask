import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   username = new FormControl('');;
   password  = new FormControl('');; 
   date = new FormControl(''); ; 
   email = new FormControl('', [Validators.required ,Validators.email]);
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }
  login()
  {  console.log(this.email.value)
    this.httpService.postData({username: this.username.value ,email: this.email.value , password: this.password.value , 
    date: this.date.value }).subscribe(data =>
      {   
        alert('Status ' + data.status)
        
      });
 }
    getErrorMessage ()
    {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    }
  

