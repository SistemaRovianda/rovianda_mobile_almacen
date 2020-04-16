import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenLotFormComponent } from './open-lot-form.component';

describe('OpenLotFormComponent', () => {
  let component: OpenLotFormComponent;
  let fixture: ComponentFixture<OpenLotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenLotFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenLotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
