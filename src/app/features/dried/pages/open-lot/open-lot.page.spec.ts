import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { OpenLotPageComponent } from "./open-lot.page";

describe("OpenLotComponent", () => {
  let component: OpenLotPageComponent;
  let fixture: ComponentFixture<OpenLotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenLotPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
