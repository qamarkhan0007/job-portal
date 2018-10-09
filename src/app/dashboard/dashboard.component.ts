import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    flag = false;

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
    $("#css3dimagePager div").click(function(){
      var rotateY = ($(this).index() * -90);
      $("#css3dimageslider ul").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
      $("#css3dimagePager div").removeClass("active");
      $(this).addClass("active");
    });
    $("#css3dtransparency").click(function() {
      $("#css3dimageslider").toggleClass("transparency");
      $(this).toggleClass("active");
    });
    });
  }
  changeFlag(){
    this.flag = this.flag ? false: true;
  }

}
