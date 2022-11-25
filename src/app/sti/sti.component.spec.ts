import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiComponent } from './sti.component';

describe('StiComponent', () => {
  let component: StiComponent;
  let fixture: ComponentFixture<StiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
