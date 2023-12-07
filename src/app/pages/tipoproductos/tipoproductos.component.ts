import { Component, OnInit } from '@angular/core';
import { TipoproductoService } from 'src/app/services/tipoproducto.service';
import { Tipopro } from 'src/app/model/Tipopro';

@Component({
  selector: 'app-tipoproductos',
  templateUrl: './tipoproductos.component.html',
  styleUrls: ['./tipoproductos.component.scss'],
})
export class TipoproductosComponent implements OnInit {
  tipopros: Tipopro[] = [];
  productDialog: boolean = false;
  //products: Product[];
  tipopro: Tipopro = new Tipopro();
  submitted: boolean = false;

  constructor(private tipoproductoService: TipoproductoService) {}
  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts() {
    this.tipoproductoService.getTipopro().subscribe((data) => {
      this.tipopros = data;
    });
  }

  openNew() {
    this.tipopro = {};
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

  saveProduct() {}
}
