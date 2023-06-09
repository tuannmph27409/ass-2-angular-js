import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminCreateComponent } from './product-admin-create.component';

describe('ProductAdminCreateComponent', () => {
  let component: ProductAdminCreateComponent;
  let fixture: ComponentFixture<ProductAdminCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAdminCreateComponent]
    });
    fixture = TestBed.createComponent(ProductAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
