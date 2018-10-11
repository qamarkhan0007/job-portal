import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = "http://localhost:8080/"

  constructor(private _http: Http) { }

  loginUser(data: any){
    let url = this.baseUrl+'login';
    console.log('service ', data)
    this._http.post(url, data).map(res => {
      return res.send(res)
    })
  }
}
