import { Component } from '@angular/core';
import { IUser, Ilogin } from '../admin/interface/IUser';
import { AuthAdminService } from '../admin/services/auth-admin.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };
  user!: IUser;
  error:string =''  
  constructor(
    private userServiec: AuthAdminService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.userServiec.login(this.credentials.email).subscribe(
      (user) => { 

        console.log(user.email);
        

        if (user && user.password === this.credentials.password) {
          localStorage.setItem('userId', user.id.toString());
          console.log(user.password);
          
          // this.router.navigate(['/']);
        } else {
          this.error = 'Email hoặc mật khẩu không đúng';
        }
      },
      (error) => {
        this.error = 'Email hoặc mật khẩu không đúng';
      }
    );
  }

}
