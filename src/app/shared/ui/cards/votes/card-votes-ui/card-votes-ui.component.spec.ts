import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVotesUiComponent } from './card-votes-ui.component';

describe('CardVotesUiComponent', () => {
  let component: CardVotesUiComponent;
  let fixture: ComponentFixture<CardVotesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVotesUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVotesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
