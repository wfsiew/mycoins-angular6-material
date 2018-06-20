import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  title = 'Edit Coin';
  mform: FormGroup;
  coin: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoinService,
    private fb: FormBuilder,
    private sb: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(k => {
      this.service.editCoin(k['id']).subscribe(x => {
        this.coin = x;
        this.setForm();
      });
    });
  }

  createForm() {
    this.mform = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  setForm(): any {
    let fm = this.mform;
    fm.get('name').setValue(this.coin.name);
    fm.get('price').setValue(this.coin.price);
  }

  updateCoin() {
    let fm = this.mform;
    let name = fm.value.name;
    let price = fm.value.price;
    let id = this.coin.id;
    this.service.updateCoin(name, price, id).subscribe(k => {
      this.sb.open('Coin updated successfully', '', {
        duration: 5000
      });
      this.router.navigate(['index']);
    });
  }

  isFieldInvalid(s: string): boolean {
    let k = this.mform.get(s);
    return k.invalid && (k.dirty || k.touched);
  }

  isFormInvalid() {
    return this.mform.pristine || this.mform.invalid;
  }

  isErrorRequired(s: string) {
    return this.mform.get(s).errors.required;
  }
}
