import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private Api= "https://emailvalidation.abstractapi.com/v1/?api_key=739c18e90959415399bbdeecca359a47&email=wamaithaweru19@gmail.com";

  constructor(private http:HttpClient) { }
  
  postMessage(Formcontact:any){
    return this.http.post(this.Api,input, {responseType:"text"}).pipe(
      map(
        (response:any) => {
          if(response) {
            return response;
          }
        },
        (error:any)=>{
          return error;
        }
      )
    )
  }
}
function input(Api: string, input: any, arg2: { responseType: "text"; }) {
  throw new Error('Function not implemented.');
}

