import { ProductService } from 'src/app/services/product.service';
import { Venta } from 'src/app/model/Venta';
import { VentasService } from './../../services/ventas.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { DetalleVenta } from 'src/app/model/Detalleventa';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  usuario: any;
  
  productoss: any;
  id!: number;
  ventas: Venta[] = [];
  subTotal!: number;
  cantidad!: number;
  productDialog: boolean = false;
  //products: Product[];
  venta: Venta = {
    tipodepago: '',
    iduser: {
      id: 0,
    },
    detalleventa: 
      {
        cantidad: 0,
        preciounitario: 0,
        id:0,
      },
  };
  submitted: boolean = false;
  producto: Product = new Product();
  productos: Product[] = [];
  detalleventa: DetalleVenta = new DetalleVenta();
  detalleventas: DetalleVenta[] = [];

  constructor(
    private ventasService: VentasService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts() {
    this.ventasService.getVentas().subscribe((data) => {
      this.ventas = data;
    });
  }
  byid() {
    this.productService.getproductibyid(this.id).subscribe((data: any) => {
      this.productos = data;
    });
  }
  openNew() {
    this.venta = {};
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
  formatearFecha(fechacreacion: Date): string {
    return fechacreacion.toLocaleDateString();
  }
  saveProduct() {
    this.submitted = true;
    this.usuario;
    this.detalleventa = {
      cantidad: this.detalleventa.cantidad,
      preciounitario: this.detalleventa.preciounitario,
      productoid: {
        id: this.producto.id,
      },
    };
    this.ventasService.saveVenta(this.venta).subscribe((data) => {
      this.venta = data;
      this.loadActulizar();
    });
  }
  loadActulizar() {
    this.ventas.push(this.venta);
    this.ventas = [...this.ventas];
    this.productDialog = false;
    this.venta = {};
  }
}
