import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjetComponent } from './assign-projet.component';

describe('AssignProjetComponent', () => {
  let component: AssignProjetComponent;
  let fixture: ComponentFixture<AssignProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
