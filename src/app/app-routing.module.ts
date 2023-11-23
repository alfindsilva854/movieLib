import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BHomeComponent } from './b-home/b-home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusermngComponent } from './adminusermng/adminusermng.component';
import { AdminmoviemngComponent } from './adminmoviemng/adminmoviemng.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {path:'',component:BHomeComponent},
  {path:'admin-login',component:AdminloginComponent},
  {path:'admin-home',component:AdminhomeComponent},
  {path:'admin-usermng',component:AdminusermngComponent},
  {path:'admin-moviemng',component:AdminmoviemngComponent},
  {path:'admin-add-movie',component:AdminAddMovieComponent},
  {path:'admin-edit-product/:id',component:EditMovieComponent},
  {path:'movie-view/:id',component:SingleViewComponent},
  {path:'user-login',component:UserloginComponent},
  {path:'user-register',component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
