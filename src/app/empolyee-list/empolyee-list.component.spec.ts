import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeListComponent } from './empolyee-list.component';

describe('EmpolyeeListComponent', () => {
  let component: EmpolyeeListComponent;
  let fixture: ComponentFixture<EmpolyeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeListComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
