import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ExitLotPageComponent } from "./exit-lot.page";

describe("ExitLotComponent", () => {
  let component: ExitLotPageComponent;
  let fixture: ComponentFixture<ExitLotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExitLotPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExitLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
