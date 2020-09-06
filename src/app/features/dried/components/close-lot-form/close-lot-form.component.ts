import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import isEmpty from "lodash.isempty";
import * as moment from "moment";
import { lotResponse, STATUS_LOT } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/Models/app-state.interface';
import { LOTS_SELECTOR } from '../../store/catalog-lots/catalog-lots.selector';
import { fetchAllLots } from '../../store/catalog-lots/catalog-lots.actions';

@Component({
  selector: "close-lot-form",
  templateUrl: "./close-lot-form.component.html",
  styleUrls: ["./close-lot-form.component.scss"],
})
export class CloseLotFormComponent implements OnInit {
  form: FormGroup;

  @Input() products: ProductInterface[];

  @Output("onSubmit") submit = new EventEmitter();

  lots: lotResponse[] = [];

  status = STATUS_LOT;

  warehouseDriefId: string;

  constructor(private fb: FormBuilder, private _store: Store<AppStateInterface>) {
    this.form = fb.group({
      loteId: ["", Validators.required],
      productId: ["", Validators.required],
      date: [new Date().toISOString()],
      warehouseId: ['', Validators.required],
      status: [this.status.CLOSED],
    });
  }

  ngOnInit() {
    this._store.select(LOTS_SELECTOR).subscribe(res => this.lots = res);
  }

  onSubmit() {
    const { loteId, date, ...value } = this.form.value;

    const payload = {
      ...value,
      loteId: loteId,
      date: moment(date).format("YYYY-MM-DD"),
    };

    this.submit.emit({
      data: payload,
      warehouseDriefId: this.warehouseDriefId,
    });
  }

  onChangeLot(evt) {
    console.log("product: ", evt.detail.value);
    this.form.get("loteId").setValue(evt.detail.value.lot);
    this.form.get('warehouseId').setValue(evt.detail.value.warehouseId);
    this.warehouseDriefId = evt.detail.value.warehouseId;
  }

  selectProduct(evt) {
    console.log("producto seleccionado: ", evt.detail.value.productId);
    this.form.get('productId').setValue(evt.detail.value.productId);
    this._store.dispatch(fetchAllLots({ productId: evt.detail.value.productId, typeLot: "DRIEF" }))
  }

  disabled(e) {
    return isEmpty(e);
  }
}
