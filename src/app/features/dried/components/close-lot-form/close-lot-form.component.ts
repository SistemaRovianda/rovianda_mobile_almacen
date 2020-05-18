import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { LotInterface, STATUS_LOT } from "src/app/shared/Models/lot.interface";

@Component({
  selector: "close-lot-form",
  templateUrl: "./close-lot-form.component.html",
  styleUrls: ["./close-lot-form.component.scss"],
})
export class CloseLotFormComponent implements OnInit {
  form: FormGroup;
  @Input() products: ProductInterface[];
  @Input() lots: LotInterface[];
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
    this.filterProducts = this.products.filter(
      (product) => product.loteId == e.detail.value.loteId
    );
  }
}
