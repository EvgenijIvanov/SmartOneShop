import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyCellImageComponent } from './table-body-cell-image.component';

describe('TableBodyCellImageComponent', () => {
  let component: TableBodyCellImageComponent;
  let fixture: ComponentFixture<TableBodyCellImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBodyCellImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBodyCellImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
