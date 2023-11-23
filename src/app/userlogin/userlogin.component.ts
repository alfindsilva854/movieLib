import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent  implements OnInit{


  userloginForm=this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb:FormBuilder,private ms:MovieServiceService,private router:Router){ }

  ngOnInit(): void {
      
  }
  userlogin(){
    this.ms.userlogin(this.userloginForm.value.email,this.userloginForm.value.psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("user",result._id)
        this.router.navigateByUrl("")
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.router.navigateByUrl("user-register")
      }
    })
  }

}
