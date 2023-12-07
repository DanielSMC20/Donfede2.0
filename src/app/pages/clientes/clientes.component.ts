import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
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
  constructor(
    private usuarioService: UsuariosService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

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

  deleteProduct() {}

  editProduct() {
    //this.product = {...product};
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  agregarUsuario(usuario: Usuarios) {
    this.usuarioService.añadirUsuario(usuario).subscribe((data) => {
      this.mensajeDeExito('registrado');
      this.router.navigate(['/clientes']);
    });
  }
  mensajeDeExito(texto: string) {
    this._snackBar.open(`El usuario fue ${texto} con exito`, '', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
