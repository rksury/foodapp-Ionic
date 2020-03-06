import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurentPage } from './restaurent.page';

describe('RestaurentPage', () => {
  let component: RestaurentPage;
  let fixture: ComponentFixture<RestaurentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
