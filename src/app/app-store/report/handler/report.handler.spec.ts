import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, ReplaySubject } from 'rxjs';
import { ReportHandler } from './report.handler';
import * as ReportActions from '../actions/report.action';


describe('ReportHandler', () => {
  let handler: ReportHandler;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });
    actions$ = new ReplaySubject(1);
    handler = TestBed.inject(ReportHandler);

    spyOn(handler.store$, 'dispatch');
  });

  it('should be created', () => {
    expect(handler).toBeTruthy();
  });

  describe('#Dispatch', () => {
    it('should emit loadingList true  when start to get all Technicians', () => {
      // Arrange:
      const action = ReportActions.getAllReports();

      // Act:
      handler.getAllReports();

      // Assert:
      expect(handler.store$.dispatch).toHaveBeenCalledOnceWith(action);
    });

    it('should emit loadingList true  when start to get all Technicians', () => {
      // Arrange:
      const id = '123';
      const isLike = true;

      const action = ReportActions.updateLikeUnlikeReport({ id, isLike });

      // Act:
      handler.updateLikeUnlikeReport(id, isLike);

      // Assert:
      expect(handler.store$.dispatch).toHaveBeenCalledOnceWith(action);
    });
  });
});
