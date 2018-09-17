import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoryAdminComponent } from './user-history-admin.component';

describe('UserHistoryAdminComponent', () => {
  let component: UserHistoryAdminComponent;
  let fixture: ComponentFixture<UserHistoryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHistoryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
