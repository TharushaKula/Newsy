import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustReadComponent } from './must-read.component';

describe('MustReadComponent', () => {
  let component: MustReadComponent;
  let fixture: ComponentFixture<MustReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MustReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
