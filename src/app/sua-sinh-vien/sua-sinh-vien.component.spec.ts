import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaSinhVienComponent } from './sua-sinh-vien.component';

describe('SuaSinhVienComponent', () => {
  let component: SuaSinhVienComponent;
  let fixture: ComponentFixture<SuaSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
