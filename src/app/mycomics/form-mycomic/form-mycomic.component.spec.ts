import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMycomicComponent } from './form-mycomic.component';

describe('FormMycomicComponent', () => {
  let component: FormMycomicComponent;
  let fixture: ComponentFixture<FormMycomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMycomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMycomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
