import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/products-iterface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get<Product>('https://fakestoreapi.com/products');
  }
}
