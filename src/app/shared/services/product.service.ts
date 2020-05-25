import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://apirest-tcc-produtos.herokuapp.com/swagger-ui.html#/';

  constructor(
    private http: HttpClient
    ) { }

    getAll(){
      return this.http.get(`${this.url}`);
    }
}
