import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { lotResponse } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";

@Component({
  selector: "exit-lot-form",
  templateUrl: "./exit-lot-form.component.html",
  styleUrls: ["./exit-lot-form.component.scss"],
})
export class ExitLotFormComponent implements OnInit {
  form: FormGroup;
  @Input() lots: lotResponse[];

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
    this.filterProducts = e.detail.value.products;
  }
}
