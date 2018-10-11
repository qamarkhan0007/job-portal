import { Component, OnInit  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';
  login = true;
  register = false;
  tab = 'login';

  constructor(private _service: AppService){

  }

  ngOnInit() {
    console.log('How many times ')
  }
  changeTab(action: any){
    if(action == 'login'){
      this.login = true;
      this.register = false;
    }else{
      this.register = true;
      this.login = false;
    }
  }
  loginUser(form){
    console.log('username ', form.username)
    console.log('password ', form)
    this._service.loginUser(form).subscribe(res => {
      console.log('login response ', res)
    })
  }

}
