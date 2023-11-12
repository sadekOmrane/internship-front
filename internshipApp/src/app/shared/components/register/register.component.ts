import { AuthService } from './../../providers/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;
  messageError : string;
  success = false;
  constructor(private fb:FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.registerForm = this.fb.group({
      email: [null, []],
      username: [null, []],
      password: [null, []],
      password2: [null, []],
      first_name: [null, []],
      last_name: [null, []],
    })
  }

  submit(){
    const formData = this.registerForm.getRawValue();
    this.authService.register(formData).subscribe(res=>{
      this.success = true;
      setTimeout(() => {
        this.dialogRef.close();
      }, 3000);
    }, err=>{
      this.messageError = err.error.detail
    })

  }

}
