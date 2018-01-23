import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsMyComicComponent } from './creators-my-comic.component';

describe('CreatorsMyComicComponent', () => {
  let component: CreatorsMyComicComponent;
  let fixture: ComponentFixture<CreatorsMyComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorsMyComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsMyComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
