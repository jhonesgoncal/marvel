import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomicsComponent } from './mycomics.component';

describe('MycomicsComponent', () => {
  let component: MycomicsComponent;
  let fixture: ComponentFixture<MycomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
