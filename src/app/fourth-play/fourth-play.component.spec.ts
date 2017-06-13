import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPlayComponent } from './fourth-play.component';

describe('FourthPlayComponent', () => {
  let component: FourthPlayComponent;
  let fixture: ComponentFixture<FourthPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
