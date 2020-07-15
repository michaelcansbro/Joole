import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup, FormControl, Validator, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isLoginPage=false;
  
    constructor(private fb:FormBuilder,public authService:AuthService) { }
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
    
      },{updateOn:'blur'});

      console.log(this.email.valid);
      console.log(this.password.valid);
    
  
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.email.value,this.password.value)
    }
  }
  
  

  get email(){
    return this.loginForm.get('email');
  }
  get password(){ 
    return this.loginForm.get('password');
  }
}
