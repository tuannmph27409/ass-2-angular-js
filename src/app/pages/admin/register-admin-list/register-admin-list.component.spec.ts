import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminListComponent } from './register-admin-list.component';

describe('RegisterAdminListComponent', () => {
  let component: RegisterAdminListComponent;
  let fixture: ComponentFixture<RegisterAdminListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAdminListComponent]
    });
    fixture = TestBed.createComponent(RegisterAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
