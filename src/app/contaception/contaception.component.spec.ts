import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaceptionComponent } from './contaception.component';

describe('ContaceptionComponent', () => {
  let component: ContaceptionComponent;
  let fixture: ComponentFixture<ContaceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
