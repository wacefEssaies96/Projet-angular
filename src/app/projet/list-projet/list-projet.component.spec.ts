import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetComponent } from './list-projet.component';

describe('ListProjetComponent', () => {
  let component: ListProjetComponent;
  let fixture: ComponentFixture<ListProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
