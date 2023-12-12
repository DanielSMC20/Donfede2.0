import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../model/Clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  myAppUrl = environment.backusuarios;
  myApiUrl = '/list';
  myApiCrear = '/create';
  myApiborrar ='/eliminar';
  constructor(private http: HttpClient) {}
  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.myAppUrl + this.myApiUrl);
  }
  saveTipouva(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.myAppUrl + this.myApiCrear, usuario);
  }
  deletetipouva(id: Number) {
    return this.http.delete(`${this.myAppUrl}${this.myApiborrar}/${id}`);
  }
}
  
