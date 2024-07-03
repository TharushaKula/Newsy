import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNewsComponent } from './write-news.component';

describe('WriteNewsComponent', () => {
  let component: WriteNewsComponent;
  let fixture: ComponentFixture<WriteNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});