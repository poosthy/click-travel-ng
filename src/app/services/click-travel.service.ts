import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Destination } from '../interfaces/destination';
import { Billet } from '../interfaces/billet';
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
  getBillet(destination: string){
    const billet: any ={"where": {"to": destination}}

    return this.http.get<Billet>(environment.Basepi+"/ticket",{})
  }
    
}
