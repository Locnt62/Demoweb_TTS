import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietSinhVienComponent } from './chi-tiet-sinh-vien.component';

describe('ChiTietSinhVienComponent', () => {
  let component: ChiTietSinhVienComponent;
  let fixture: ComponentFixture<ChiTietSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
