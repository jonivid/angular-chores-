import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChoreComponent } from './add-chore.component';

describe('AddChoreComponent', () => {
  let component: AddChoreComponent;
  let fixture: ComponentFixture<AddChoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
