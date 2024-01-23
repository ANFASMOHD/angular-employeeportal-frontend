import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeAddComponent } from './empolyee-add.component';

describe('EmpolyeeAddComponent', () => {
  let component: EmpolyeeAddComponent;
  let fixture: ComponentFixture<EmpolyeeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeAddComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
