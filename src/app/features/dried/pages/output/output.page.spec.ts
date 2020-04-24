import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { OutputPageComponent } from "./output.page";

describe("ExitLotComponent", () => {
  let component: OutputPageComponent;
  let fixture: ComponentFixture<OutputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
