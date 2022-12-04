import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProjetComponent } from './form-projet.component';

describe('FormProjetComponent', () => {
  let component: FormProjetComponent;
  let fixture: ComponentFixture<FormProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
