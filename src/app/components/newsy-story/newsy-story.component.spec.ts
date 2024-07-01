import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsyStoryComponent } from './newsy-story.component';

describe('NewsyStoryComponent', () => {
  let component: NewsyStoryComponent;
  let fixture: ComponentFixture<NewsyStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsyStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
