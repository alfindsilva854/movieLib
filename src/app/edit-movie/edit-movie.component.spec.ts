import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieComponent } from './edit-movie.component';

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMovieComponent]
    });
    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
