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
  myApiUrl = '/list';
  myApicrear = '/producto/create';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myAppUrl + this.myApiUrl);
  }
  postProduct(product: FormData) {
    return this.http.post<Product>(this.myAppUrl + this.myApicrear, product);
  }
}
