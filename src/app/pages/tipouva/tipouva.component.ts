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
