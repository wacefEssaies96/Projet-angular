import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildepartementsComponent } from './detaildepartements.component';

describe('DetaildepartementsComponent', () => {
  let component: DetaildepartementsComponent;
  let fixture: ComponentFixture<DetaildepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
