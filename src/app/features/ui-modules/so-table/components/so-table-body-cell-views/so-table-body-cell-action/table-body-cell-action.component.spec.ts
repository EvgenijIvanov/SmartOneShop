import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyCellActionComponent } from './table-body-cell-action.component';

describe('TableBodyCellActionComponent', () => {
  let component: TableBodyCellActionComponent;
  let fixture: ComponentFixture<TableBodyCellActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBodyCellActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBodyCellActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
