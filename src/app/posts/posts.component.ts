
import { Component, OnInit ,} from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../data.service';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  response:any=[];
  
  

  constructor(private DataService:DataService) {}

  ngOnInit(): void {

    this.DataService.SendGetRequest().subscribe((response : any)=>
    {
      console.log(response,"yes")
      this.response = response;
    });





    }
  }