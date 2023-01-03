import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoTableBodyCellWrapperComponent } from './so-table-body-cell-wrapper.component';

describe('SoTableCellWrapperComponent', () => {
  let component: SoTableBodyCellWrapperComponent;
  let fixture: ComponentFixture<SoTableBodyCellWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoTableBodyCellWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoTableBodyCellWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
