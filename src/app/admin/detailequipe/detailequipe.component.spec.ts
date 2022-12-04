import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailequipeComponent } from './detailequipe.component';

describe('DetailequipeComponent', () => {
  let component: DetailequipeComponent;
  let fixture: ComponentFixture<DetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
