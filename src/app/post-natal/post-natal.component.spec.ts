import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNatalComponent } from './post-natal.component';

describe('PostNatalComponent', () => {
  let component: PostNatalComponent;
  let fixture: ComponentFixture<PostNatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNatalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
