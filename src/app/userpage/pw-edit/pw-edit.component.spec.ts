import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwEditComponent } from './pw-edit.component';

describe('PwEditComponent', () => {
  let component: PwEditComponent;
  let fixture: ComponentFixture<PwEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
