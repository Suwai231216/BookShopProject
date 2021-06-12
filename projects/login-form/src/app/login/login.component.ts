import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent{

  loginForm !:  FormGroup;
  public submitted = false;
  

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email:['' , Validators.required],
      password:['' , Validators.required]
    });
    
  }

    get formControl(){
      return this.loginForm.controls;
    }
  
    onLogin(){

      this.submitted = true;

      if(this.loginForm.invalid){
        console.log(this.loginForm.value);
        return;
      }else{
        this.router.navigate(["/home"]);
      }
      //localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
    }
    toSignUp(){
      this.router.navigate(["/register"]);

    }
}
