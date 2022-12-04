import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratsComponent } from './contrats.component';

describe('ContratsComponent', () => {
  let component: ContratsComponent;
  let fixture: ComponentFixture<ContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
