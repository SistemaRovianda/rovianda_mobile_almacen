import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    this.submit.emit(this.form.value);
  }

  change(e) {
    this.filterProducts = e.detail.value.products;
  }
}
