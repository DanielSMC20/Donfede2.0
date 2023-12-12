import { Component, OnInit } from '@angular/core';
import { Tipouva } from 'src/app/model/Tipouva';
import { TipouvaService } from 'src/app/services/tipouva.service';

@Component({
  selector: 'app-tipouva',
  templateUrl: './tipouva.component.html',
  styleUrls: ['./tipouva.component.scss'],
})
export class TipouvaComponent implements OnInit {
  tipouvas: Tipouva[] = [];
  productDialog: boolean = false;
  //products: Product[];
  tipouva: Tipouva = new Tipouva();
  submitted: boolean = false;
  constructor(private tipouvaService: TipouvaService) {}

  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts() {
    this.tipouvaService.getTipoUva().subscribe((data) => {
      this.tipouvas = data;
    });
  }

  openNew() {
    this.tipouva = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct(id: number) {
    this.tipouvaService.deletetipouva(id).subscribe((data) => {
      console.log(data);
    });
    this.tipouvas = this.tipouvas.filter((val) => val.id !== id);
    this.tipouva = {};
  }
  editProduct(tipou: Tipouva) {
    this.tipouva = { ...tipou };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    this.tipouvaService.saveTipouva(this.tipouva).subscribe((data) => {
      this.tipouva = data;
      this.loadActulizar();
    });
  }
  loadActulizar() {
    this.tipouvas.push(this.tipouva);
    this.tipouvas = [...this.tipouvas];
    this.productDialog = false;
    this.tipouva = {};
  }
}
