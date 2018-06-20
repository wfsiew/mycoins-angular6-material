import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  mform: FormGroup;

  constructor(
    private service: CoinService,
    private fb: FormBuilder,
    private sb: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.mform = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  addCoin() {
    let fm = this.mform;
    let name = fm.value.name;
    let price = fm.value.price;
    this.service.addCoin(name, price).subscribe(k => {
      this.sb.open('Coin created successfully', '', {
        duration: 5000
      });
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
