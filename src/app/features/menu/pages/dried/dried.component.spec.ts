import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriedComponent } from './dried.component';

describe('DriedComponent', () => {
  let component: DriedComponent;
  let fixture: ComponentFixture<DriedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
