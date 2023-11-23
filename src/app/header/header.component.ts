import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userloginForm=this.fb.group({
    email:[''],
    psw:['']
  })

  constructor(private fb:FormBuilder,private ms:MovieServiceService,private router:Router){ }

  ngOnInit(): void {
      
  }
  userlogin(){
    this.ms.userlogin(this.userloginForm.value.email,this.userloginForm.value.psw).subscribe({
      next:(resut:any)=>{
        alert(resut.message)
        localStorage.setItem("user",resut._id)
        this.router.navigateByUrl("")
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.router.navigateByUrl("user-register")
      }
    })
  }

}
