import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // url = ("https://jsonplaceholder.typicode.com/posts");
  url = ("https://api.openbrewerydb.org/breweries");
  base= ("https://api.openbrewerydb.org/breweries?by_dist=38.8977,77.0365")

  constructor(private httpClient:HttpClient) { }
    
  
   public SendGetRequest(){
 
    return this.httpClient.get(this.url); 
    
   }
   
  RequestName(){
    return this.httpClient.get(this.base); 
   
   }
  }
 