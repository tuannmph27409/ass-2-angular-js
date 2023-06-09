import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../interface/IProduct';
import { ProductAdminService } from '../services/product-admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-admin-create',
  templateUrl: './product-admin-create.component.html',
  styleUrls: ['./product-admin-create.component.css']
})
export class ProductAdminCreateComponent {




  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    description: ['', [Validators.required]],
    imgUrl: ['', [Validators.required]]
  });



  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductAdminService,
    private router: Router
  ) { }
  onHandleSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || '',
      imgUrl: this.productForm.value.imgUrl || ''
    };

    this.productService.addProduct(product).subscribe((product) => {
      alert(`Thêm sản phẩm thành công: ${product.name}`);
      this.router.navigate(['/admin/dashboard'])

    });
  }
}
