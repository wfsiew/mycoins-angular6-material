import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  coins: any;

  headers = ['name', 'price', 'action'];

  constructor(
    private service: CoinService,
    private sb: MatSnackBar) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.service.getCoins().subscribe(k => {
      this.coins = k;
    });
  }

  deleteCoin(name, id) {
    this.service.deleteCoin(id).subscribe(k => {
      this.sb.open(`Coin ${name} deleted successfully`, '', {
        duration: 2000
      });
      this.getCoins();
    });
  }
}
