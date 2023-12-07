import { Venta } from 'src/app/model/Venta';
import { VentasService } from './../../services/ventas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  ventas: Venta[] = [];
  productDialog: boolean = false;
  //products: Product[];
  venta: Venta = new Venta();
  submitted: boolean = false;

  constructor(private ventasService: VentasService) {}

  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts() {
    this.ventasService.getVentas().subscribe((data) => {
      this.ventas = data;
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

  saveProduct() {}
}
