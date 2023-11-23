import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminloginForm=this.fb.group({
    auname:[''],
    apsw:['']
  })

  constructor(private fb:FormBuilder,private rout:Router,private ms:MovieServiceService){ }

  ngOnInit():void{
    
  }
  adminlogin(){
    this.ms.adminlogin(this.adminloginForm.value.auname,this.adminloginForm.value.apsw).subscribe({
      next:(result:any)=>{
        this.rout.navigateByUrl('admin-home')
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })

  }
}
