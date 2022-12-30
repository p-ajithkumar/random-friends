import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
;
  random:any;
  data:any;

  constructor(private http:HttpClient)
  {

  }

  ngOnInit(): void {
    
  }



 api()
 {
  this.random= Math.floor(Math.random() * (30 - 1) + 1);
  this.http.get(`https://dummyjson.com/users/${this.random}`).subscribe((result)=>
  {
  this.data=result;
  console.log(this.data);
  
  
  })
   
 }

}
