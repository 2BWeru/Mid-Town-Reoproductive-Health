import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyaneComponent } from './gyane.component';

describe('GyaneComponent', () => {
  let component: GyaneComponent;
  let fixture: ComponentFixture<GyaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GyaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
