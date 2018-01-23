import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersMyComicComponent } from './characters-my-comic.component';

describe('CharactersMyComicComponent', () => {
  let component: CharactersMyComicComponent;
  let fixture: ComponentFixture<CharactersMyComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersMyComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersMyComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
