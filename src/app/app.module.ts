import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BHomeComponent } from './b-home/b-home.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusermngComponent } from './adminusermng/adminusermng.component';
import { AdminmoviemngComponent } from './adminmoviemng/adminmoviemng.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BHomeComponent,
    SingleViewComponent,
    AdminloginComponent,
    UserloginComponent,
    AdminhomeComponent,
    AdminusermngComponent,
    AdminmoviemngComponent,
    AdminAddMovieComponent,
    EditMovieComponent,
    UserRegisterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
