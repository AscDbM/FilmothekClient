import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcEditComponent } from './cc-edit.component';

describe('CcEditComponent', () => {
  let component: CcEditComponent;
  let fixture: ComponentFixture<CcEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
