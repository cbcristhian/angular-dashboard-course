import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics1Component } from './graphics1.component';

describe('Graphics1Component', () => {
  let component: Graphics1Component;
  let fixture: ComponentFixture<Graphics1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
