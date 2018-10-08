import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyusageComponent } from './myusage.component';

describe('MyusageComponent', () => {
  let component: MyusageComponent;
  let fixture: ComponentFixture<MyusageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyusageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
