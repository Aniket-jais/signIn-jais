import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MyServiceService} from '../../service/my-service.service'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private _servieSign:MyServiceService) { }
  mySign(){
   // alert("ssss");
    this._servieSign.signIn(this.signInForm.value).subscribe();
    //this._http.mySignUp(this.signUpForm.value).subscribe();
  }


  ngOnInit() {
  }

}
