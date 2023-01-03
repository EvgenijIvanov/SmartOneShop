import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactoryComponent } from './form-factory.component';

describe('FormFactoryComponent', () => {
  let component: FormFactoryComponent;
  let fixture: ComponentFixture<FormFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFactoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
