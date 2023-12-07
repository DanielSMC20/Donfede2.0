import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Product[] = [];
  productDialog: boolean = false;
  //products: Product[];
  product: Product = new Product();
  submitted: boolean = false;
  
  constructor(private productService: ProductService){}

  ngOnInit(){
    /*this.products = [
      {id: 1, descripcion: "Leche Gloria", precio: 4.5},
      {id: 2, descripcion: "Arroz costeño", precio: 6.5},
      {id: 3, descripcion: "Azucar rubia", precio: 2.6},
      {id: 4, descripcion: "Pan bimbo", precio: 9},
      {id: 5, descripcion: "Aceite primor", precio: 7.4}
    ];*/
    this.LoadProducts();
  }

  LoadProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct(){

  }

  editProduct(){
    //this.product = {...product};
    this.productDialog = true;
  }

  hideDialog(){
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct(){

  }

}


