import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyCellDefaultComponent } from './table-body-cell-default.component';

describe('TableBodyCellDefaultComponent', () => {
  let component: TableBodyCellDefaultComponent;
  let fixture: ComponentFixture<TableBodyCellDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBodyCellDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBodyCellDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
