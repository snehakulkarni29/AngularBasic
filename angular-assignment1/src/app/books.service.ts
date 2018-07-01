import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BooksService {
  public Baseurl="https://anapioficeandfire.com/api/characters/";
  constructor(private _http:HttpClient) {
//   constructor() {

    console.log("Inside serice constructor");
 }
 getallbooks(){
//     let response=this._http.get(this.Baseurl);
//     return response;
console.log("getallbooks is called");
    let response;
    this._http.get(this.Baseurl).subscribe(
        data =>{
            response= data["data"];
            console.log(response);
        },
        error =>{
            console.log("Error extracting json");
        }

    )
    
    return response;
 }
}
