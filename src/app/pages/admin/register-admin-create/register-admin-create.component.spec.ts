import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminCreateComponent } from './register-admin-create.component';

describe('RegisterAdminCreateComponent', () => {
  let component: RegisterAdminCreateComponent;
  let fixture: ComponentFixture<RegisterAdminCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAdminCreateComponent]
    });
    fixture = TestBed.createComponent(RegisterAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
