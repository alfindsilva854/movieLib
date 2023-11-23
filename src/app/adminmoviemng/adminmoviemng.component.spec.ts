import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoviemngComponent } from './adminmoviemng.component';

describe('AdminmoviemngComponent', () => {
  let component: AdminmoviemngComponent;
  let fixture: ComponentFixture<AdminmoviemngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminmoviemngComponent]
    });
    fixture = TestBed.createComponent(AdminmoviemngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
