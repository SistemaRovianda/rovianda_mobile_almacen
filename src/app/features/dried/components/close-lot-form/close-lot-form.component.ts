import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { lotResponse, STATUS_LOT } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import * as moment from "moment";

@Component({
  selector: "close-lot-form",
  templateUrl: "./close-lot-form.component.html",
  styleUrls: ["./close-lot-form.component.scss"],
})
export class CloseLotFormComponent implements OnInit {
  form: FormGroup;
  @Input() lots: lotResponse[];
  @Output("onSubmit") submit = new EventEmitter();

  filterProducts: ProductInterface[];

  status = STATUS_LOT;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      date: [""],
      status: [this.status.CLOSE],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { date, ...value } = this.form.value;

    const payload = {
      ...value,
      date: moment(date).format("YYYY-MM-DD"),
    };

    this.submit.emit(payload);
  }

  change(e) {
    this.form.get("loteId").setValue(e.detail.value.loteId);
    this.filterProducts = e.detail.value.products;
  }

  changeProduct(e) {
    this.form.get("productId").setValue(++e.detail.value);
  }
}
