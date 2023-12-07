import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta } from '../model/Venta';


@Injectable({
  providedIn: 'root',
})
export class VentasService {
  myAppUrl = environment.backventa;
  myApiUrl = '/list';
  myApicrear = '/create';

  constructor(private http: HttpClient) {}

  getVentas(): Observable<Venta[]> {
    return this.http.get<any[]>(this.myAppUrl + this.myApiUrl).pipe(
      map((ventasFromApi: any[]) => {
        return ventasFromApi.map((venta: any) => {
          return {
            ...venta,
            fechacreacion: new Date(venta.fechacreacion),
          };
        });
      })
    );
  }
  saveVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.myAppUrl + this.myApicrear, venta);
  }
  deleteVenta(id: Number) {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
