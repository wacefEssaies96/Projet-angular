import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  public StageControllerName = '/stage';
  public url=environment.url+this.StageControllerName;
  
  constructor(
    private http: HttpClient
  ) { }
}