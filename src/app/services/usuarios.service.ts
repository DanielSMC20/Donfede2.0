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
  myApiCrear='/create'
  constructor(private http: HttpClient) {}
  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.myAppUrl + this.myApiUrl);
  }
   añadirUsuario(usuario: Usuarios) {
    return this.http.post(`${this.myAppUrl}${this.myApiCrear}/`, usuario);
  }
}
  
