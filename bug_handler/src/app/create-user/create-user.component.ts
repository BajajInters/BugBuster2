import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      usertype: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  public async onSubmit() {
    console.log(this.userForm.value);
    try {
      const data = this.userForm.value;
      const response = await this.apiService.createUser(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
