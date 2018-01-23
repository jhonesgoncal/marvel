import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesMyComicComponent } from './stories-my-comic.component';

describe('StoriesMyComicComponent', () => {
  let component: StoriesMyComicComponent;
  let fixture: ComponentFixture<StoriesMyComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesMyComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesMyComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
