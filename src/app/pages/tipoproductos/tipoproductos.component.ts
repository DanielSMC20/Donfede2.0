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

  deleteProduct(id: number) {
    this.tipoproductoService.deletetipo(id).subscribe((data) => {
      console.log(data);
    });
    this.tipopros = this.tipopros.filter((val) => val.id !== id);
    this.tipopro = {};
  }
  editProduct(tipopro: Tipopro) {
    this.tipopro = { ...tipopro };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveTipopro() {
    this.submitted = true;
    this.tipoproductoService.saveTipopro(this.tipopro).subscribe((data) => {
      this.tipopro = data;
      this.loadActulizar();
    });
  }
  loadActulizar() {
    this.tipopros.push(this.tipopro);
    this.tipopros = [...this.tipopros];
    this.productDialog = false;
    this.tipopro = {};
  }
}
