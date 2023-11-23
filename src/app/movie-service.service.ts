import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  search=new BehaviorSubject("")

  // baseUrl='http://localhost:3006'
  baseUrl='https://movie-server-19q2.onrender.com'

  constructor(private http:HttpClient) { }

  //api to admin login
  adminlogin(uname:any,psw:any){
    const body={
      uname,psw
    }
    return this.http.post(`${this.baseUrl}/admin/login`,body)
  }

  //api to add new movie
  addMovie(body:any){
    return this.http.post(`${this.baseUrl}/admin/add-movie`,body)
  }

  //api to get all movies
  getAllMovies(){
    return this.http.get(`${this.baseUrl}/Movies-access`)
  }

  //api to edit product
  editMovie(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/movie-update/${id}`,bodyData)
  }

  //api to get single product data
  getMovie(id:any){
    return this.http.get(`${this.baseUrl}/one-movie/${id}`)
  }

  //api to delete product
  deleteMovie(id:any){
    return this.http.delete(`${this.baseUrl}/movie-delete/${id}`)
  }

//api to  user register
userRegister(name:any,email:any,psw:any){
  const body={name,email,psw}
  return this.http.post(`${this.baseUrl}/user-signUp`,body)
}

//api to user login
userlogin(email:any,psw:any){
  const body={email,psw}
  return this.http.post(`${this.baseUrl}/user-login`,body)
}

  //api to get all users
  getAllUsers(){
    return this.http.get(`${this.baseUrl}/user-access`)
  }

  //api to delete users
  deleteUser(id:any){
    return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
  }
  
}
