import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, MinValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  submitted = false;
  hide = true;
 
  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['' , Validators.required],
      password:['' , Validators.required],
      confirmPassword:['',Validators.required]},{
      validator: this.ConfirmPasswrodValidator('password', 'confirmPassword')
  }); 
  }

    get formControl(){
      return this.registerForm.controls;
    }
//SignUp 
    SignUp(){
      this.submitted = true;
      if(this.registerForm.invalid){
        console.log(this.registerForm.value);
        return;
      }else{
        this.router.navigate(["/home"]);
      }
      //localStorage.setItem("user-Data", JSON.stringify(this.registorForm.value));
    }
    //goto login form
    Cancel(){
      this.router.navigate(["/login"]);
    }
    
      //confirmPassword check match
      ConfirmPasswrodValidator(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
    }
}