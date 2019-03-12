import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SignUp} from '../../modals/signUp-modal';
import {Observable} from 'rxjs';
import {SignIn} from '../../modals/signIn';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  constructor(private _serviceHttp:HttpClient) { }
  mySignUp(value): Observable<SignUp[]>{
    return this._serviceHttp.post<SignUp[]>("http://localhost:3000/postForm",value);
  }

  signIn(data):Observable<SignIn[]>{
    alert("asda");
    return this._serviceHttp.post<SignIn[]>("http://localhost:3000/postSignIn",data)
  }
}
