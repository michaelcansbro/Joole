import{ Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from './user';
import {UserLogin} from './userLogin';
import { from, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private email: string;
  private authStatusListener = new Subject<boolean>();
  constructor(
    private httpClient:HttpClient, private router:Router) {}

   getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getEmail() {
    return this.email;
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string , email: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
    register(firstName:string,lastName:string,email: string, password: string){
    const userData: User = { firstName:firstName,lastName:lastName,email: email, password: password };
    this.httpClient.post(BACKEND_URL + "/users/register", userData).subscribe(
      () => {
        this.router.navigate(["/search"]);
      }
   
    );
    }

    login(email: string, password: string) {
      const userLogin: UserLogin= {email: email, password: password };
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email + ':' + password)})
      this.httpClient
        .get<{ token: string; expiresIn: number; email: string }>(
          BACKEND_URL + "/users/login",
          {headers}
        )
        .subscribe(
          response => {
            const token = response.token;
            this.token = token;
            if (token) {
              this.isAuthenticated = true;
              this.email = response.email;
              this.authStatusListener.next(true);
              this.saveAuthData(token,this.email);
              this.router.navigate(["/search"]);
            }
            
          }
        );
    }
  
    logout() {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      this.email = null;
      clearTimeout(this.tokenTimer);
      this.clearAuthData();
      this.router.navigate(["/"]);
    }
    private clearAuthData() {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      localStorage.removeItem("email");
    }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    //console.log(!(user === null))
    return !(user === null)
  }
  



  logOut() {
    sessionStorage.removeItem('username')
  }
}
