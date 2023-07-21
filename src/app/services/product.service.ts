import { Injectable } from '@angular/core'; // service den gelir ng g service
import {HttpClient} from '@angular/common/http'; //backende istekde bulunmanı sağlar
import { ProductResponsaModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:7199/api/products/getall"

  constructor(private httpClient:HttpClient) { }
  


  getProducts():Observable<ProductResponsaModel>{
    return this.httpClient.get<ProductResponsaModel>(this.apiUrl);
    };

  }

