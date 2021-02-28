import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesResultBarComponent } from './votes-result-bar.component';

describe('VotesResultBarComponent', () => {
  let component: VotesResultBarComponent;
  let fixture: ComponentFixture<VotesResultBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesResultBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesResultBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
