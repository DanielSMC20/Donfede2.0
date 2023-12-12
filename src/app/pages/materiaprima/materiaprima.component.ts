import { Component, OnInit } from '@angular/core';
import { Materiapri } from 'src/app/model/Materiapri';
import { MateriapriService } from 'src/app/services/materiapri.service';

@Component({
  selector: 'app-materiaprima',
  templateUrl: './materiaprima.component.html',
  styleUrls: ['./materiaprima.component.scss'],
})
export class MateriaprimaComponent implements OnInit {
  materiapris: Materiapri[] = [];
  productDialog: boolean = false;
  //products: Product[];
  materiapri: Materiapri = new Materiapri();
  submitted: boolean = false;

  constructor(private materiaService: MateriapriService) {}

  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts() {
    this.materiaService.getProducts().subscribe((data) => {
      this.materiapris = data;
    });
  }

  openNew() {
    this.materiapri = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct(id: number) {
    this.materiaService.deleteMateria(id).subscribe(data => {
      console.log(data);
    });
    this.materiapris = this.materiapris.filter(val => val.id !== id);
    this.materiapri = {};
  }

  editProduct(materia: Materiapri) {
    this.materiapri = { ...materia };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  loadActulizar() {
    this.materiapris.push(this.materiapri);
    this.materiapris = [...this.materiapris];
    this.productDialog = false;
    this.materiapri = {};
  }

  saveProduct() {
    this.submitted = true;
    this.materiaService.saveMateria(this.materiapri).subscribe((data) => {
      this.materiapri = data;
      this.loadActulizar();
    });
  }

  findIndexById(id: Number): number {
    let index = -1;
    for (let i = 0; i < this.materiapris.length; i++) {
      if (this.materiapris[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
