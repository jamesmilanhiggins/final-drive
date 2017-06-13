import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPlayComponent } from './second-play.component';

describe('SecondPlayComponent', () => {
  let component: SecondPlayComponent;
  let fixture: ComponentFixture<SecondPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
