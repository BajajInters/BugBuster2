import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,

    private apiService: ApiService,
    private router: Router
  ) {}

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  async proceedlogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const res = await this.apiService.loginUser(this.loginForm.value);
      if (res) {
        this.router.navigateByUrl('/dashboard');
      }
    }
  }

  // loginForm: FormGroup;
  // submitted = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private apiService: ApiService
  // ) {
  // }

  // loginForm = this.formBuilder.group({
  //   username: ['', Validators.required],
  //   password: ['', Validators.required],
  // });
  // console.log(this.loginForm.value);

  // public async onSubmit() {
  //   console.log(this.loginForm);
  //   try {
  //     const data = this.loginForm.value;
  //     const response = await this.apiService.loginUser(data);
  //     console.log(response);
  //     this.submitted = true;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
