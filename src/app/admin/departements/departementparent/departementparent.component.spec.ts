import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementparentComponent } from './departementparent.component';

describe('DepartementparentComponent', () => {
  let component: DepartementparentComponent;
  let fixture: ComponentFixture<DepartementparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
