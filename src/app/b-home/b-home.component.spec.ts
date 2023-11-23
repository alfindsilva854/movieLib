import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BHomeComponent } from './b-home.component';

describe('BHomeComponent', () => {
  let component: BHomeComponent;
  let fixture: ComponentFixture<BHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BHomeComponent]
    });
    fixture = TestBed.createComponent(BHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
