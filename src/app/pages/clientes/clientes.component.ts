import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuarios } from 'src/app/model/Clientes';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  usuarios: Usuarios[] = [];
  productDialog: boolean = false;
  //products: Product[];
  usuario: Usuarios = new Usuarios();
  submitted: boolean = false;
  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {
    this.LoadProducts();
  }
  openNew() {
    this.usuario = {};
    this.submitted = false;
    this.productDialog = true;
  }
  LoadProducts() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  deleteProduct(id: number) {
    this.usuarioService.deletetipouva(id).subscribe((data) => {
      console.log(data);
    });
    this.usuarios = this.usuarios.filter((val) => val.id !== id);
    this.usuario = {};
  }
  editProduct(usuario: Usuarios) {
    this.usuario = { ...usuario };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    this.usuarioService.saveTipouva(this.usuario).subscribe((data) => {
      this.usuario = data;
      this.loadActulizar();
    });
  }
  loadActulizar() {
    this.usuarios.push(this.usuario);
    this.usuarios = [...this.usuarios];
    this.productDialog = false;
    this.usuario = {};
  }
}
