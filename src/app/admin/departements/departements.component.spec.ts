import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsComponent } from './departements.component';

describe('DepartementsComponent', () => {
  let component: DepartementsComponent;
  let fixture: ComponentFixture<DepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
