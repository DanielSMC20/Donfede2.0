import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tipopro } from '../model/Tipopro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipoproductoService {
  myAppUrl = environment.backtipopro;
  myApiUrl = '/list';
  myApicrear = '/create';
  constructor(private http: HttpClient) {}
  getTipopro(): Observable<Tipopro[]> {
    return this.http.get<Tipopro[]>(this.myAppUrl + this.myApiUrl);
  }
  saveTipopro(tipopro: Tipopro): Observable<Tipopro> {
    return this.http.post<Tipopro>(this.myAppUrl + this.myApicrear, tipopro);
  }
  deletetipo(id: Number) {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
