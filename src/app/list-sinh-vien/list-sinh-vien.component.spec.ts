import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSinhVienComponent } from './list-sinh-vien.component';

describe('ListSinhVienComponent', () => {
  let component: ListSinhVienComponent;
  let fixture: ComponentFixture<ListSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
