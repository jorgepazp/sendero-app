import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsometricCubesComponent } from './isometric-cubes.component';

describe('IsometricCubesComponent', () => {
  let component: IsometricCubesComponent;
  let fixture: ComponentFixture<IsometricCubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsometricCubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsometricCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
