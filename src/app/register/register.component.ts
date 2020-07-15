import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
isLoginPage=false;

  constructor(private fb:FormBuilder,public authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fName:['',Validators.required],
      lName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
  
    },{updateOn:'blur'});

    console.log(this.fName.valid);
    console.log(this.lName.valid);
    console.log(this.email.valid);
    console.log(this.password.valid);
  

}
onSubmit(){
  if(this.registerForm.valid){
    this.authService.register(this.fName.value,this.lName.value,this.email.value,this.password.value)
  }
}


get fName(){
  return this.registerForm.get('fName');
}
get lName(){
  return this.registerForm.get('lName');
}
get email(){
  return this.registerForm.get('email');
}
get password(){ 
  return this.registerForm.get('password');
}
  }
