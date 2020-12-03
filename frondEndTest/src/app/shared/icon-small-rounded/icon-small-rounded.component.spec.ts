import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSmallRoundedComponent } from './icon-small-rounded.component';

describe('IconSmallRoundedComponent', () => {
  let component: IconSmallRoundedComponent;
  let fixture: ComponentFixture<IconSmallRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSmallRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSmallRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
