import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interface/IProduct';
import { ProductAdminService } from '../services/product-admin.service';


@Component({
  selector: 'app-product-admin-update',
  templateUrl: './product-admin-update.component.html',
  styleUrls: ['./product-admin-update.component.css']
})
export class ProductAdminUpdateComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    description: ['', [Validators.required]],
    imgUrl: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductAdminService,
    private router: ActivatedRoute,
    private routers: Router
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.productService.getProductById(id).subscribe(
        (data) => {
          console.log(data);
          this.product = data;

          this.productForm.patchValue({
            name: data.name,
            price: data.price,
            description: data.description,
            imgUrl: data.imgUrl
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        imgUrl: this.productForm.value.imgUrl || ''
      };

      this.productService.updateProduct(product).subscribe((product) => {
        alert(`Thêm sản phẩm thành công: ${product.name}`);
        this.routers.navigate(['/admin/dashboard'])
        // console.log(product);
        // console.log('product', product);
      });
    }
  }
}
