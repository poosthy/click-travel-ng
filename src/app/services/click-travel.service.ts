import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { filter, map } from 'rxjs/operators';
import {Destination} from '../interfaces/destination'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  idDestination: any[];
  constructor(private http: HttpClient,) { }


  ngOnInit() {
      
  }

  getDestination(): Observable<Destination>{
      return  this.http.get<Destination>(environment.BaseApi+"/destination");
  }
    
}
