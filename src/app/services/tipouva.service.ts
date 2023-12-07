import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tipouva } from '../model/Tipouva';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipouvaService {
  myAppUrl = environment.backtipou;
  myApiUrl = '/list';
  myApicrear = '/create';
  constructor(private http: HttpClient) {}
  getTipoUva(): Observable<Tipouva[]> {
    return this.http.get<Tipouva[]>(this.myAppUrl + this.myApiUrl);
  }
  saveTipouva(tipopro: Tipouva): Observable<Tipouva> {
    return this.http.post<Tipouva>(this.myAppUrl + this.myApicrear, tipopro);
  }
  deletetipouva(id: Number) {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
