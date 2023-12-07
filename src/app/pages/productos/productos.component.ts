import { Product } from './../../model/Product';
import { Component, OnInit } from '@angular/core';
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

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log(data);
    });
    this.products = this.products.filter((val) => val.id !== id);
    this.product = {};
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  loadActulizar() {
    this.products.push(this.product);
    this.products = [...this.products];
    this.productDialog = false;
    this.product = {};
  }

  saveProduct() {
    this.submitted = true;
    this.productService.saveProduct(this.product).subscribe((data) => {
      this.product = data;
      this.loadActulizar();
    });
  }

  findIndexById(id: Number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
