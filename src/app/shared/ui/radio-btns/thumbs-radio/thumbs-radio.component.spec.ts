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
  });
  
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`When radioThumbUp is clicked should emit a value equal to up`, () => {
    // Arrange:    
    fixture.detectChanges();
    spyOn(component.thumbSelected, 'emit');

    // Act:
    const radioThumbUp: HTMLElement = fixture.nativeElement.querySelector(`#radioThumbUp`);
    radioThumbUp.click();
    
    // Assert:    
    expect(component.thumbSelected.emit).toHaveBeenCalledWith(component.checkedThumbUp);
  });

  it(`When radioThumbDown is clicked should emit a value equal to down`, () => {
    // Arrange:    
    fixture.detectChanges();
    spyOn(component.thumbSelected, 'emit');

    // Act:
    const radioThumbDown: HTMLElement = fixture.nativeElement.querySelector(`#radioThumbDown`);
    radioThumbDown.click();
    
    // Assert:    
    expect(component.thumbSelected.emit).toHaveBeenCalledWith(component.checkedThumbDown);
  });
});
