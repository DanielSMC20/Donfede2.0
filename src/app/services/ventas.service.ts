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
}
