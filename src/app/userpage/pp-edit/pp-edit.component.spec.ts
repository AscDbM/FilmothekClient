import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpEditComponent } from './pp-edit.component';

describe('PpEditComponent', () => {
  let component: PpEditComponent;
  let fixture: ComponentFixture<PpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
