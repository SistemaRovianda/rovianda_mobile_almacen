import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import isEmpty from "lodash.isempty";
import * as moment from "moment";
import { lotResponse } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { noWhiteSpace } from "src/app/shared/Validators/whitespace.validator";

@Component({
  selector: "exit-lot-form",
  templateUrl: "./exit-lot-form.component.html",
  styleUrls: ["./exit-lot-form.component.scss"],
})
export class ExitLotFormComponent implements OnInit {
  form: FormGroup;
  @Input() lots: lotResponse[] = [];

  @Output("onSubmit") submit = new EventEmitter();

  filterProducts: ProductInterface[] = [];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      observations: ["", [noWhiteSpace]],
      date: [""],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { loteId, date, ...value } = this.form.value;

    const payload = {
      ...value,
      loteId: loteId.loteId,
      productId: parseInt(this.form.get("productId").value),
      date: moment().format("YYYY/MM/DD"),
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
