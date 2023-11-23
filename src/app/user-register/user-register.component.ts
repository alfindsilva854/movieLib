import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb: FormBuilder, private ms: MovieServiceService, private router: Router) { }

  ngOnInit(): void {

  }
  register() {


    this.ms.userRegister(this.userRegisterForm.value.name, this.userRegisterForm.value.email, this.userRegisterForm.value.psw).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.router.navigateByUrl('user-login')
      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })

  }
}

