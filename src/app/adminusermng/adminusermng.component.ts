import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-adminusermng',
  templateUrl: './adminusermng.component.html',
  styleUrls: ['./adminusermng.component.css']
})
export class AdminusermngComponent implements OnInit {

  users:any=[]
  constructor(private ms:MovieServiceService){ }

  ngOnInit(): void {
    this.ms.getAllUsers().subscribe({
      next:(result:any)=>{
        // console.log(result.message);
        this.users=result.message
        
      }
    })
  }
  deleteUsers(id:any){
    this.ms.deleteUser(id).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.ms.getAllUsers().subscribe({
          next:(result:any)=>{
            // console.log(result.message);
            this.users=result.message
          }
        })
      }
    })
  }
}
