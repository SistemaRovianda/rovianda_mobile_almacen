import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import isEmpty from "lodash.isempty";
import * as moment from "moment";
import { lotResponse } from "src/app/shared/models/lot.interface";
import { ProductInterface } from "src/app/shared/models/product.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { LOTS_SELECTOR } from "../../store/catalog-lots/catalog-lots.selector";
import { fetchAllLots } from "../../store/catalog-lots/catalog-lots.actions";

@Component({
  selector: "exit-lot-form",
  templateUrl: "./exit-lot-form.component.html",
  styleUrls: ["./exit-lot-form.component.scss"],
})
export class ExitLotFormComponent implements OnInit {
  form: FormGroup;

  @Input() products: ProductInterface[] = [];

  @Output("onSubmit") submit = new EventEmitter();

  lots: lotResponse[] = [];

  constructor(
    private fb: FormBuilder,
    private _store: Store<AppStateInterface>
  ) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      observations: ["", []],
      date: [""],
    });
  }

  ngOnInit() {
    this._store.select(LOTS_SELECTOR).subscribe((res) => (this.lots = res));
  }

  onSubmit() {
    const { date, ...value } = this.form.value;

    const payload = {
      ...value,
      date: moment().format("YYYY/MM/DD"),
    };

    this.submit.emit(payload);
  }

  onChangeLot(evt) {
    console.log("product: ", evt.detail.value);
  }

  selectProduct(evt) {
    this._store.dispatch(
      fetchAllLots({
        productId: evt.detail.value,
        typeLot: "DRIEF",
        status: "OPENED",
      })
    );
  }

  disabled(e) {
    return isEmpty(e);
  }

  get product() {
    return this.form.get("productId");
  }
}
