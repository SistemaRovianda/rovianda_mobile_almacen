import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriedFormComponent } from './dried-form.component';

describe('DriedFormComponent', () => {
  let component: DriedFormComponent;
  let fixture: ComponentFixture<DriedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriedFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
