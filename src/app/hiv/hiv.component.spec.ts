import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIVComponent } from './hiv.component';

describe('HIVComponent', () => {
  let component: HIVComponent;
  let fixture: ComponentFixture<HIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HIVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
