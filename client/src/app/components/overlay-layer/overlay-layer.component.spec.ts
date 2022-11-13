import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayLayerComponent } from './overlay-layer.component';

describe('OverlayLayerComponent', () => {
  let component: OverlayLayerComponent;
  let fixture: ComponentFixture<OverlayLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
