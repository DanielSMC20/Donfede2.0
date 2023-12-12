import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  myAppUrl = environment.backRoot;
  myAppUrlcat = environment.backtipopro;
  myApiUrl = '/list';
  myApicrear = '/producto/create';
  myApiborrar = '/producto/eliminar';
  myApiByid = '/producto';
  myApiByidcat = '/categoria';
  productos: Product[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myAppUrl + this.myApiUrl);
  }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.myAppUrl + this.myApicrear, product);
  }
  deleteProduct(id: Number) {
    return this.http.delete(`${this.myAppUrl}${this.myApiborrar}/${id}`);
  }
  getproductibyid(id: number) {
    return this.http.get<Product>(`${this.myApiUrl}${this.myApiByid}/${id}`);
  }
  getproductosporcategoria(id: any) {
    return this.http.get(`${this.myApiUrl}/${id}`);
  }
  
}

