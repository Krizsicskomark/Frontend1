import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private api = "https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app";
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.api}/.json`);
  }

  addProduct(product: any) {
    return this.http.post(`${this.api}/.json`, product);
  }
}
