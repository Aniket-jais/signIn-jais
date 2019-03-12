import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms';
import {MyServiceService} from '../service/my-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    mobileNumber : new FormControl(),
    dateOfBirth : new FormControl(),
    password : new FormControl(),
    confirmPassword : new FormControl(),

  })

  constructor(private _http:MyServiceService,
              private _route:Router) { }

  ngOnInit() {

  }
  onSubmit(){
    this._http.mySignUp(this.signUpForm.value).subscribe();
    this._route.navigate(["/signIn"]);
  }

}
