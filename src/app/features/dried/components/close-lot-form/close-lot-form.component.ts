import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import isEmpty from "lodash.isempty";
import * as moment from "moment";
import { lotResponse, STATUS_LOT } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";

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
    const { loteId, date, ...value } = this.form.value;

    const payload = {
      ...value,
      loteId: loteId.loteId,
      date: moment(date).format("YYYY-MM-DD"),
    };

    this.submit.emit(payload);
  }

  change() {
    const value: lotResponse = this.form.get("loteId").value;
    this.filterProducts = value.products;
  }

  disabled(e) {
    return isEmpty(e);
  }
}
