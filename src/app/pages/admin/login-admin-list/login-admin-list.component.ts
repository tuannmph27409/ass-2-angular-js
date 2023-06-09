import { Component } from '@angular/core';
import { IUser } from '../interface/IUser';
import { AuthAdminService } from '../services/auth-admin.service';

@Component({
  selector: 'app-login-admin-list',
  templateUrl: './login-admin-list.component.html',
  styleUrls: ['./login-admin-list.component.css']
})
export class LoginAdminListComponent {
  users: IUser[] = [];
  constructor(private userService: AuthAdminService) {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.log(error.message)
    );
  }
  delete(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }
}
