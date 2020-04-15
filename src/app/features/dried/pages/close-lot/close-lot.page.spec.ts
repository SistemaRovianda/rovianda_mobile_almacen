import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { CloseLotPageComponent } from "./close-lot.page";

describe("CloseLotComponent", () => {
  let component: CloseLotPageComponent;
  let fixture: ComponentFixture<CloseLotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloseLotPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
