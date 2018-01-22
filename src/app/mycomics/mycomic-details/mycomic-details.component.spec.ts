import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomicDetailsComponent } from './mycomic-details.component';

describe('MycomicDetailsComponent', () => {
  let component: MycomicDetailsComponent;
  let fixture: ComponentFixture<MycomicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
