import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakePageComponent } from './fake-page.component';

describe('FakePageComponent', () => {
  let component: FakePageComponent;
  let fixture: ComponentFixture<FakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
