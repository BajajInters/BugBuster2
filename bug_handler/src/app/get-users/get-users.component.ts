import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css'],
})
export class GetUsersComponent {
  users: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  public async ngOnInit() {
    try {
      this.users = await this.apiService.getAllUsers();
      console.log(this.users);
    } catch (error) {
      console.error(error);
    }
  }

  public async setDelete(data: any) {
    try {
      console.log(data);

      const status = await this.apiService.deleteUser(data._id);
      if (status) {
        console.log('User deleted successfully');
      } else {
        console.log('Error deleting');
      }
      this.users = await this.apiService.getAllUsers();
      console.log(this.users);
    } catch (error) {
      console.error(error);
    }
  }

  public async navigateToModify(data: any) {
    try {
      this.router.navigate(['dashboard/update', { update: true }]);
    } catch (err) {
      console.log(err);
    }
  }
}
