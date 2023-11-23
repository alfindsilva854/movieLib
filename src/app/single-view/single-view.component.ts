import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  pid: any = ""
  pdata: any = {}

  constructor(private ar: ActivatedRoute, private ms: MovieServiceService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
      this.ms.getMovie(this.pid).subscribe({
        next: (result: any) => {
          this.pdata = result.message

        }
      })
    })
  }

}
