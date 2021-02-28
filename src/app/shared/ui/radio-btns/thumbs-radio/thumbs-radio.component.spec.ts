import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsRadioComponent } from './thumbs-radio.component';

describe('ThumbsRadioComponent', () => {
  let component: ThumbsRadioComponent;
  let fixture: ComponentFixture<ThumbsRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbsRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
