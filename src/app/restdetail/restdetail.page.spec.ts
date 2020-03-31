import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestdetailPage } from './restdetail.page';

describe('RestdetailPage', () => {
  let component: RestdetailPage;
  let fixture: ComponentFixture<RestdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
