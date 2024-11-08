import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/types/type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  login() {
    const LoginBody: Login = this.loginForm.value;
    this.authService.login(LoginBody).subscribe({
        next: value => {
          localStorage.setItem('access_token', value.access_token);
          this.router.navigateByUrl('/')
        }, error: error => {
          console.error(error);
        }
      });
  }
}
