import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  products: Product[] = [];
  productDialog: boolean = false;
  //products: Product[];
  product: Product = new Product();
  submitted: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.LoadProducts();
  }

  LoadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct() {}

  editProduct() {
    //this.product = {...product};
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {

  }
}
