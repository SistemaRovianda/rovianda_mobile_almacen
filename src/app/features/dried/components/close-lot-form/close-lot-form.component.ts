import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { LotInterface } from "src/app/shared/Models/lot.interface";

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

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      date: [""],
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
