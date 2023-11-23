import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  pid:any=""
  pdata:any={}

constructor(private router:ActivatedRoute,private ms:MovieServiceService,private rout:Router){ }

ngOnInit(): void {
    this.router.params.subscribe((data:any)=>{
      this.pid=data.id
      this.ms.getMovie(this.pid).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
          console.log(this.pdata);
          
        }
      })

    })
}
editMovie(){
  this.ms.editMovie(this.pid,this.pdata).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl("admin-moviemng")
    }
  })
}

}
