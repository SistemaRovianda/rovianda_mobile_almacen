import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "open-lot-form",
  templateUrl: "./open-lot-form.component.html",
  styleUrls: ["./open-lot-form.component.scss"],
})
export class OpenLotFormComponent implements OnInit {
  form: FormGroup;
  @Output("onSubmit") submit = new EventEmitter();

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
}
