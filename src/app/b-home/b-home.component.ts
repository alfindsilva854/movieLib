import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-home',
  templateUrl: './b-home.component.html',
  styleUrls: ['./b-home.component.css']
})
export class BHomeComponent implements OnInit {

  products: any = []
  catMovie: any = []
  searchData:any=""

  constructor(private ms: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
    this.ms.getAllMovies().subscribe({
      next: (result: any) => {
        this.products = result.message
        this.catMovie=this.products
      }
    })
  }
  viewPage() {
    if (localStorage.getItem('user')) {
      //  alert("Ready To Go Chief")
    }
    else {
      alert("Please Login To Get Access")
      this.router.navigateByUrl('user-login')
    }
  }
  isloggedin(){
    if(localStorage.getItem("user")==null){
      return false
    }
    else{
      return true
    }
  }

  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user')
    }
    else {
      alert("not logged in")

    }
  }
  categoryMovie(catid: any) {

    this.catMovie = this.products.filter((item: any) =>
      item["catid"] == catid || catid=="")
    // console.log(this.catMovie);

  }
  accessData(event:any){
    this.searchData=event.target.value
    console.log(this.searchData);
    
  }
}
