import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquearterSuggestedComponent } from './headquearter-suggested.component';

describe('HeadquearterSuggestedComponent', () => {
  let component: HeadquearterSuggestedComponent;
  let fixture: ComponentFixture<HeadquearterSuggestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadquearterSuggestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquearterSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
