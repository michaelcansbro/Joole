import { Injectable } from '@angular/core';
import{ Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from './user';
import {UserLogin} from './userLogin';
import { from, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Product} from './product'
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private httpClient:HttpClient, private router:Router) { }
  
  product : Product [];
  

}
