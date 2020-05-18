import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { LotInterface } from "src/app/shared/Models/lot.interface";

@Component({
  selector: "exit-lot-form",
  templateUrl: "./exit-lot-form.component.html",
  styleUrls: ["./exit-lot-form.component.scss"],
})
export class ExitLotFormComponent implements OnInit {
  form: FormGroup;
  @Input() products: ProductInterface[];
  @Input() lots: LotInterface[];

  @Output("onSubmit") submit = new EventEmitter();

  filterProducts: ProductInterface[] = [];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      observations: [""],
      date: [new Date().toISOString()],
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
