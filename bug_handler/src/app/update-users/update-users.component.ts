import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css'],
})
export class UpdateUsersComponent {
  users: any[] = [];
  update: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.update = this.route.snapshot.paramMap.get('update');
    console.log(this.update);
  }

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
      this.router.navigate(['/dashboard/update', { update: true }]);
    } catch (err) {
      console.log(err);
    }
  }
}
