import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPlayComponent } from './third-play.component';

describe('ThirdPlayComponent', () => {
  let component: ThirdPlayComponent;
  let fixture: ComponentFixture<ThirdPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
