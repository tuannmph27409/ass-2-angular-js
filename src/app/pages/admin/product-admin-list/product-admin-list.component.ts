import { Component } from '@angular/core';
import { IProduct } from '../interface/IProduct';
import { ProductAdminService } from '../services/product-admin.service';

@Component({
  selector: 'app-product-admin-list',
  templateUrl: './product-admin-list.component.html',
  styleUrls: ['./product-admin-list.component.css']
})
export class ProductAdminListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductAdminService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
  delete(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
