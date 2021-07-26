import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response:any=[];

  constructor(private DataService:DataService ) { }

  ngOnInit(): void {
    this.DataService.RequestName().subscribe((response : any)=>
    {
      console.log(response,"hiiiiiiii")
      this.response = response;
    });

  }

}
