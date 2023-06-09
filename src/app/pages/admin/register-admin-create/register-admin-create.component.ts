import { Component } from '@angular/core';
import { IUser } from '../interface/IUser';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthAdminService } from '../services/auth-admin.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-register-admin-create',
  templateUrl: './register-admin-create.component.html',
  styleUrls: ['./register-admin-create.component.css']
})
export class RegisterAdminCreateComponent {
  userForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: AuthAdminService,
    private router: Router
  ) { }
  onHandleSubmit() {
    const user: IUser = {
      id: '',
      username: this.userForm.value.username || '',
      email: this.userForm.value.email || '',
      password: this.userForm.value.password || '',
    };

    this.userService.addUser(user).subscribe((user) => {
      alert(`Thêm thành công: ${user.username}`);
      this.router.navigate(['/admin/register-list'])
    });
  }
}
