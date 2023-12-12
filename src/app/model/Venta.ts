import { Usuarios } from "./Clientes";
import { DetalleVenta } from "./Detalleventa";

export class Venta {
  id?: Number;
  fechacreacion?: Date;
  tipodepago?: String;
  tipoentrega?: Number;
  pagototal?: Number;

  iduser?: {
    id: Number;
  };

  detalleventa?: DetalleVenta;
}
