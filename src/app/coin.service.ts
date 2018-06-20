import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  baseuri = 'http://localhost:9000/app';

  constructor(private http: HttpClient) { }

  addCoin(name, price) {
    const uri = `${this.baseuri}/coins/`;
    const o = {
      name: name,
      price: price
    };
    return this.http.post(uri, o);
  }

  getCoins() {
    const uri = `${this.baseuri}/coins/`;
    return this.http.get(uri).pipe(map(k => k));
  }

  editCoin(id) {
    const uri = `${this.baseuri}/coin/${id}/`;
    return this.http.get(uri).pipe(map(k => k));
  }

  updateCoin(name, price, id) {
    const uri = `${this.baseuri}/coin/${id}/`;
    const o = {
      name: name,
      price: price
    };
    return this.http.put(uri, o);
  }

  deleteCoin(id) {
    const uri = `${this.baseuri}/coin/${id}/`;
    return this.http.delete(uri);
  }
}
