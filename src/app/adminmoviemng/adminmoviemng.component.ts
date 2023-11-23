import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-adminmoviemng',
  templateUrl: './adminmoviemng.component.html',
  styleUrls: ['./adminmoviemng.component.css']
})
export class AdminmoviemngComponent implements OnInit {

  pdata:any=[]

  constructor(private rout: Router,private ms:MovieServiceService) { }

  ngOnInit(): void {
    this.ms.getAllMovies().subscribe({
      next:(result:any)=>{
        // console.log(result.message);
        this.pdata=result.message
        
      }
    })
  }
  addPage() {

    this.rout.navigateByUrl("admin-add-movie")

  }
  editPage(id:any){
    this.rout.navigateByUrl(`admin-edit-product/${id}`)
  }
  deleteMovie(id:any){
    this.ms.deleteMovie(id).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.ms.getAllMovies().subscribe({
          next:(result:any)=>{
            // console.log(result.message);
            this.pdata=result.message
          }
        })
      }
    })
  }
}
