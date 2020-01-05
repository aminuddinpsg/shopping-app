import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public apiURL:string ='http://localhost:3000/products/';
  public products: Product[];
  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiURL);
  }
}
