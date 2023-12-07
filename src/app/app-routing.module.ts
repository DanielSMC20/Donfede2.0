import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { TipoproductosComponent } from './pages/tipoproductos/tipoproductos.component';
import { TipouvaComponent } from './pages/tipouva/tipouva.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { MateriaprimaComponent } from './pages/materiaprima/materiaprima.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'tipoproducto', component: TipoproductosComponent },
  { path: 'tipouva', component: TipouvaComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'ventas', component: VentasComponent },
  { path: 'materiaprima', component: MateriaprimaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
