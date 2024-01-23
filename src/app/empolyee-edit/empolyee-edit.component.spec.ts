import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeEditComponent } from './empolyee-edit.component';

describe('EmpolyeeEditComponent', () => {
  let component: EmpolyeeEditComponent;
  let fixture: ComponentFixture<EmpolyeeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeEditComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
