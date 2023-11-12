import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/security/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  messageError : string;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.formBuilder();
  }


  formBuilder(){
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }


  submit(){
    const formData = this.loginForm.getRawValue();
    this.authService.login(formData).subscribe((res:any)=>{
      this.dialogRef.close();
    }, err=>{
      console.log(err.error.detail);
      this.messageError = err.error.detail
    })
  }

}
