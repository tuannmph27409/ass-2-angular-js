import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminUpdateComponent } from './product-admin-update.component';

describe('ProductAdminUpdateComponent', () => {
  let component: ProductAdminUpdateComponent;
  let fixture: ComponentFixture<ProductAdminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAdminUpdateComponent]
    });
    fixture = TestBed.createComponent(ProductAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
