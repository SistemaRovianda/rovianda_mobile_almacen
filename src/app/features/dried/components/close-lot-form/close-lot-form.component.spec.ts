import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloseLotFormComponent } from './close-lot-form.component';

describe('CloseLotFormComponent', () => {
  let component: CloseLotFormComponent;
  let fixture: ComponentFixture<CloseLotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseLotFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloseLotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
