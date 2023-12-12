import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiapri } from '../model/Materiapri';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MateriapriService {
  myAppUrl = environment.backmateria;
  myApiUrl = '/list';
  myApicrear = '/materiaprima/create';
  myApiborrar ='/materiaprima/eliminar'
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Materiapri[]> {
    return this.http.get<Materiapri[]>(this.myAppUrl + this.myApiUrl);
  }
  saveMateria(materiapri: Materiapri): Observable<Materiapri> {
    return this.http.post<Materiapri>(
      this.myAppUrl + this.myApicrear,
      materiapri
    );
  }
  deleteMateria(id: Number) {
    return this.http.delete(`${this.myAppUrl}${this.myApiborrar}/${id}`);
  }
}