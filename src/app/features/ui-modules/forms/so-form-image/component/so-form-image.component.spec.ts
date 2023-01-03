import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoFormImageComponent } from './so-form-image.component';

describe('ImageInputComponent', () => {
  let component: SoFormImageComponent;
  let fixture: ComponentFixture<SoFormImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoFormImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
