import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard/create', component: CreateUserComponent },
  { path: 'dashboard/getUsers', component: GetUsersComponent },
  { path: 'dashboard/update', component: UpdateUsersComponent },
  { path: 'dashboard/update/:id', component: ModifyUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bug-form', component: BugFormComponent },
  { path: 'bug-list', component: BugListComponent },
  { path: 'bug-list/:id', component: CommentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bug-form', component: BugFormComponent },
  { path: 'bug-list', component: BugListComponent },
  { path: 'bug-list/:id', component: BugDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
