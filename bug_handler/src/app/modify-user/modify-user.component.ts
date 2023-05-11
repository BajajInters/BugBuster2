import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css'],
})
export class ModifyUserComponent {
  userForm: FormGroup;
  user_id: any;
  userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user_id = this.route.snapshot.paramMap.get('id');
    this.getUserData();
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

  public async getUserData() {
    this.userData = await this.apiService.getSingleUserData(this.user_id);
    console.log(this.userData);
    this.userForm = this.formBuilder.group({
      firstname: [this.userData.user.firstname, Validators.required],
      lastname: [this.userData.user.lastname, Validators.required],
      username: [this.userData.user.username, Validators.required],
      email: [this.userData.user.email, Validators.required],
      password: [this.userData.user.password, Validators.required],
      confirmpassword: [this.userData.user.password, Validators.required],
      usertype: [this.userData.user.usertype, Validators.required],
      mobile: [this.userData.user.mobile, Validators.required],
    });
  }

  public async onSubmit() {
    console.log(this.userForm.value);
    try {
      const data = this.userForm.value;
      const response = await this.apiService.updateUser(this.user_id, data);
      console.log(response);
      this.router.navigate(['/dashboard/update']);
    } catch (error) {
      console.error(error);
    }
  }
}
