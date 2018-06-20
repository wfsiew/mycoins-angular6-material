import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  addCoin(name, price) {
    const uri = 'http://localhost:9000/coins/add';
    const o = {
      name: name,
      price: price
    };
    return this.http.post(uri, o);
  }

  getCoins() {
    const uri = 'http://localhost:9000/coins';
    return this.http.get(uri).pipe(map(k => k));
  }

  editCoin(id) {
    const uri = `http://localhost:9000/coins/edit/${id}`;
    return this.http.get(uri).pipe(map(k => k));
  }

  updateCoin(name, price, id) {
    const uri = `http://localhost:9000/coins/update/${id}`;
    const o = {
      name: name,
      price: price
    };
    return this.http.post(uri, o);
  }

  deleteCoin(id) {
    const uri = `http://localhost:9000/coins/delete/${id}`;
    return this.http.get(uri);
  }
}
