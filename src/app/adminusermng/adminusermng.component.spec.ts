import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusermngComponent } from './adminusermng.component';

describe('AdminusermngComponent', () => {
  let component: AdminusermngComponent;
  let fixture: ComponentFixture<AdminusermngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminusermngComponent]
    });
    fixture = TestBed.createComponent(AdminusermngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
