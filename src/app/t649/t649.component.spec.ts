import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T649Component } from './t649.component';

describe('T649Component', () => {
  let component: T649Component;
  let fixture: ComponentFixture<T649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
