import { Injectable } from '@angular/core'; // service den gelir ng g service
import {HttpClient} from '@angular/common/http'; //backende istekde bulunmanı sağlar
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ='https://localhost:7199/api/'

  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    };

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  };
  }

  

  

