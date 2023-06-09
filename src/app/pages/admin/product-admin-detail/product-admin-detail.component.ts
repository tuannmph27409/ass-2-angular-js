import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interface/IProduct';
import { ProductAdminService } from '../services/product-admin.service';

@Component({
  selector: 'app-product-admin-detail',
  templateUrl: './product-admin-detail.component.html',
  styleUrls: ['./product-admin-detail.component.css']
})
export class ProductAdminDetailComponent {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductAdminService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.productService.getProductById(id).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => console.log(error.message)
      );
    });
  }
}
