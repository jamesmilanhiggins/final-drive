import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPlayComponent } from './first-play.component';

describe('FirstPlayComponent', () => {
  let component: FirstPlayComponent;
  let fixture: ComponentFixture<FirstPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
