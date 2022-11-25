import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircumcisionComponent } from './circumcision.component';

describe('CircumcisionComponent', () => {
  let component: CircumcisionComponent;
  let fixture: ComponentFixture<CircumcisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircumcisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircumcisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
