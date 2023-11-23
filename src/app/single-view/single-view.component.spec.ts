import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewComponent } from './single-view.component';

describe('SingleViewComponent', () => {
  let component: SingleViewComponent;
  let fixture: ComponentFixture<SingleViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleViewComponent]
    });
    fixture = TestBed.createComponent(SingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
