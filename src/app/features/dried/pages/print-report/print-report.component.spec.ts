import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintReportComponent } from './print-report.component';

describe('PrintReportComponent', () => {
  let component: PrintReportComponent;
  let fixture: ComponentFixture<PrintReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintReportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
