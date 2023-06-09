import { Component } from '@angular/core';
import { IUser } from '../admin/interface/IUser';
import { AuthAdminService } from '../admin/services/auth-admin.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userform = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });
  //   username: '',
  //   email: '',
  //   password: '',
  // };
  constructor(
    private formBuilder: UntypedFormBuilder,
    private userServiec: AuthAdminService,
    private router: Router
  ) {
  }
  onSubmit() {
    const user: IUser = {
      id: '',
      username: this.userform.value.username || '',
      email: this.userform.value.email || '',
      password: this.userform.value.password || '',
    }
    this.userServiec.addUser(user).subscribe((user) => {
      alert(`đăng ký thành công: ${user.username}`);
      this.router.navigate(['/login'])
    });
  }

}
