import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {

constructor(private fb:FormBuilder,private ms:MovieServiceService){ }

addMoiveForm=this.fb.group({
  mname:[''],
  description:[''],
  tprice:[''],
  image:[''],
  rating:[''],
  tavailable:[''],
  catid:['']
})

ngOnInit(): void {
    
}
addNewMovie(){

  const path=this.addMoiveForm.value

  const bodyData={
    mname:path.mname,
    description:path.description,
    tprice:path.tprice,
    image:path.image,
    rating:path.rating,
    tavailable:path.tavailable,
    catid:path.catid
  }

  this.ms.addMovie(bodyData).subscribe({
    next:(result:any)=>{
      alert("new product added")
      this.addMoiveForm.reset()
    }
  })

}

}
