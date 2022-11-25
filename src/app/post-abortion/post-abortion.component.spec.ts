import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAbortionComponent } from './post-abortion.component';

describe('PostAbortionComponent', () => {
  let component: PostAbortionComponent;
  let fixture: ComponentFixture<PostAbortionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAbortionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAbortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
