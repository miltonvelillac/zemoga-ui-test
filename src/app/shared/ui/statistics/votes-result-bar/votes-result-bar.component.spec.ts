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
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#getLikeUnlikePercentage', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it(`Should return a percentage value for likeQuantity`, () => {
      // Arrange:
      component.likeQuantity = 500;
      component.unLikeQuantity = 900;

      // Act:
      const resultLike: string = component.getLikeUnlikePercentage(component.likeQuantity);

      // Assert:
      expect(resultLike).toBe('36');
    });

    it(`Should return a percentage value for unLikeQuantity`, () => {
      // Arrange:
      component.likeQuantity = 500;
      component.unLikeQuantity = 900;

      // Act:
      const resultUnLike: string = component.getLikeUnlikePercentage(component.unLikeQuantity);

      // Assert:      
      expect(resultUnLike).toBe('64');
    });

    it(`Should return a percentage value for likeQuantity if the data is zero the result is zero`, () => {
      // Arrange:
      component.likeQuantity = 0;
      component.unLikeQuantity = 900;

      // Act:
      const resultLike: string = component.getLikeUnlikePercentage(component.likeQuantity);

      // Assert:
      expect(resultLike).toBe('0');
    });

    it(`Should return a percentage value for likeQuantity if the other one is zero the result is 100`, () => {
      // Arrange:
      component.likeQuantity = 10;
      component.unLikeQuantity = 0;

      // Act:
      const resultLike: string = component.getLikeUnlikePercentage(component.likeQuantity);

      // Assert:
      expect(resultLike).toBe('100');
    });

    it(`Should return a percentage value for likeQuantity if both are zero the result is zero`, () => {
      // Arrange:
      component.likeQuantity = 0;
      component.unLikeQuantity = 0;

      // Act:
      const resultLike: string = component.getLikeUnlikePercentage(component.likeQuantity);

      // Assert:
      expect(resultLike).toBe('0');
    });
  });
  describe('#getWithStyle', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it(`Should return a percentage value for likeQuantity and set to with`, () => {
      // Arrange:
      component.likeQuantity = 600;
      component.unLikeQuantity = 900;

      // Act:
      const resultLike: string = component.getWithStyle(component.likeQuantity);

      // Assert:
      expect(resultLike).toBe('40%');
    });

    it(`Should return a percentage value for unLikeQuantity and set to with`, () => {
      // Arrange:
      component.likeQuantity = 600;
      component.unLikeQuantity = 900;

      // Act:
      const resultUnLike: string = component.getWithStyle(component.unLikeQuantity);

      // Assert:      
      expect(resultUnLike).toBe('60%');
    });

    it(`Should return a percentage value for unLikeQuantity and set to with, if the other value is zero the max return value is 75%`, () => {
      // Arrange:
      component.likeQuantity = 0;
      component.unLikeQuantity = 900;

      // Act:
      const resultUnLike: string = component.getWithStyle(component.unLikeQuantity);

      // Assert:      
      expect(resultUnLike).toBe('75%');
    });

    it(`Should return a percentage value for unLikeQuantity, if the other value is zero the min return value is 25%`, () => {
      // Arrange:
      component.likeQuantity = 1;
      component.unLikeQuantity = 0;

      // Act:
      const resultUnLike: string = component.getWithStyle(component.unLikeQuantity);

      // Assert:      
      expect(resultUnLike).toBe('25%');
    });

    it(`Should return a percentage value for unLikeQuantity, if both are zero the value is 50%`, () => {
      // Arrange:
      component.likeQuantity = 0;
      component.unLikeQuantity = 0;

      // Act:
      const resultUnLike: string = component.getWithStyle(component.unLikeQuantity);

      // Assert:      
      expect(resultUnLike).toBe('50%');
    });
  });

  describe('#UI', () => {
    it(`likeQuantity and unLikeQuantity are zero then both width should be equal`, () => {
      // Arrange:
      component.likeQuantity = 0;
      component.unLikeQuantity = 0;

      // Act:
      fixture.detectChanges();
      const resultBarLeft = fixture.nativeElement.querySelector(`#resultBarLeft`);
      const resultBarRigth = fixture.nativeElement.querySelector(`#resultBarRigth`);

      // Assert:      
      expect(getComputedStyle(resultBarLeft).width).toEqual(getComputedStyle(resultBarRigth).width);
    });

    it(`likeQuantity and unLikeQuantity are equal then both width should be equal`, () => {
      // Arrange:
      component.likeQuantity = 500;
      component.unLikeQuantity = 500;

      // Act:
      fixture.detectChanges();
      const resultBarLeft = fixture.nativeElement.querySelector(`#resultBarLeft`);
      const resultBarRigth = fixture.nativeElement.querySelector(`#resultBarRigth`);

      // Assert:      
      expect(getComputedStyle(resultBarLeft).width).toEqual(getComputedStyle(resultBarRigth).width);
    });

    it(`likeQuantity is grather than unLikeQuantity are zero then the left width should be grather than rigth width`, () => {
      // Arrange:
      component.likeQuantity = 2000;
      component.unLikeQuantity = 1000;

      // Act:
      fixture.detectChanges();
      const resultBarLeft = fixture.nativeElement.querySelector(`#resultBarLeft`);
      const resultBarRigth = fixture.nativeElement.querySelector(`#resultBarRigth`);

      const barLeftWidth = Number(getComputedStyle(resultBarLeft).width.replace('px', ''));
      const barRigthWidth = Number(getComputedStyle(resultBarRigth).width.replace('px', ''));

      // Assert:      
      expect(barLeftWidth).toBeGreaterThan(barRigthWidth);
    });

    it(`unLikeQuantity is grather than likeQuantity are zero then the rigth width should be grather than left width`, () => {
      // Arrange:
      component.likeQuantity = 2000;
      component.unLikeQuantity = 3000;

      // Act:
      fixture.detectChanges();
      const resultBarLeft = fixture.nativeElement.querySelector(`#resultBarLeft`);
      const resultBarRigth = fixture.nativeElement.querySelector(`#resultBarRigth`);

      const barLeftWidth = Number(getComputedStyle(resultBarLeft).width.replace('px', ''));
      const barRigthWidth = Number(getComputedStyle(resultBarRigth).width.replace('px', ''));

      // Assert:      
      expect(barLeftWidth).toBeLessThan(barRigthWidth);
    });
  });
});
