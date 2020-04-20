import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloseLotPage } from './close-lot.page';

describe('CloseLotPage', () => {
  let component: CloseLotPage;
  let fixture: ComponentFixture<CloseLotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseLotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloseLotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
