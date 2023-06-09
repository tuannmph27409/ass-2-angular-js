import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminListComponent } from './login-admin-list.component';

describe('LoginAdminListComponent', () => {
  let component: LoginAdminListComponent;
  let fixture: ComponentFixture<LoginAdminListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminListComponent]
    });
    fixture = TestBed.createComponent(LoginAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
