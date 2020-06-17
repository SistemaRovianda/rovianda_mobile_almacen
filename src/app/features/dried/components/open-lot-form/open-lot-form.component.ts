import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import * as moment from "moment";
import isEmpty from "lodash.isempty";
import { lotResponse, STATUS_LOT } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";

@Component({
  selector: "open-lot-form",
  templateUrl: "./open-lot-form.component.html",
  styleUrls: ["./open-lot-form.component.scss"],
})
export class OpenLotFormComponent implements OnInit {
  form;
  @Input() lots: lotResponse[] = [];
  @Output("onSubmit") submit = new EventEmitter();

  filterProducts: ProductInterface[];
  status = STATUS_LOT;
  warehouseDriefId: string;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      date: [new Date().toISOString()],
      status: [this.status.OPENED],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { loteId, date, ...value } = this.form.value;
    const payload = {
      ...value,
      loteId: loteId.loteId,
      productId: this.form.get("productId").value,
      date: moment(date).format("YYYY-MM-DD"),
    };

    console.log("payload: ", payload);

    this.submit.emit({
      data: payload,
      warehouseDriefId: this.warehouseDriefId,
    });
  }

  onChangeProduct(evt) {
    console.log("product: ", evt.detail.value);
    this.form.get("productId").setValue(evt.detail.value.id);
    this.warehouseDriefId = evt.detail.value.warehouseDriefId;
  }

  change() {
    const value: lotResponse = this.form.get("loteId").value;
    this.filterProducts = value.products;
  }

  disabled(e) {
    return isEmpty(e);
  }
}
