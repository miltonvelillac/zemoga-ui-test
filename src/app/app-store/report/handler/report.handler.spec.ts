import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, ReplaySubject } from 'rxjs';
import { ReportHandler } from './report.handler';
import * as ReportActions from '../actions/report.action';
import { Report } from 'src/app/shared/models/report.model';
import { CloneDataInDeep } from 'typescript-clone-data-in-deep';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { reportInitialState } from '../report.store';
import { CheckedThumbData } from 'src/app/shared/ui/radio-btns/thumbs-radio/thumbs-radio.component';


describe('ReportHandler', () => {
  let handler: ReportHandler;
  let actions$: Observable<any>;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });
    actions$ = new ReplaySubject(1);
    handler = TestBed.inject(ReportHandler);
    mockStore = TestBed.inject(MockStore);

    spyOn(handler.store$, 'dispatch');
  });

  it('should be created', () => {
    expect(handler).toBeTruthy();
  });

  describe('#Dispatch', () => {
    it('should call to dispatch method with getAllReports action', () => {
      // Arrange:
      const action = ReportActions.getAllReports();

      // Act:
      handler.getAllReports();

      // Assert:
      expect(handler.store$.dispatch).toHaveBeenCalledOnceWith(action);
    });

    it('should call to dispatch method with updateLikeUnlikeReport action', () => {
      // Arrange:
      const id = '123';
      const vote: CheckedThumbData = 'down';

      const action = ReportActions.updateLikeUnlikeReport({ id, vote });

      // Act:
      handler.updateLikeUnlikeReport(id, vote);

      // Assert:
      expect(handler.store$.dispatch).toHaveBeenCalledOnceWith(action);
    });
  });

  describe('#Selectors', () => {
    it('should return all reports that exist in the state', () => {
      // Arrange:
      const reports: Report[] = CloneDataInDeep.clone(reportsMock.slice(0, 2));

      const state = {
        reports: {
          ...reportInitialState,
          entities: { [reports[0].id]: reports[0], [reports[1].id]: reports[1] },
          ids: [reports[0].id, reports[1].id]
        }
      };
      mockStore.setState(state);

      let allReports: Report[] = [];

      // Act:
      handler.getAllReports$.subscribe((reps: Report[]) => allReports = reps);

      // Assert:
      expect(allReports).toEqual(reports);
    });

    it('should return the loadingGetAllReports$ value', () => {
      // Arrange:
      const state = {
        reports: {
          ...reportInitialState,
          loadingGetAllReports: true
        }
      };
      mockStore.setState(state);

      let loadingValue = false;

      // Act:
      handler.loadingGetAllReports$.subscribe((loading: boolean) => loadingValue = loading);

      // Assert:
      expect(loadingValue).toBe(true);
    });
    it('should return the loadingUpdateLikeUnlikeReport$ value', () => {
      // Arrange:
      const state = {
        reports: {
          ...reportInitialState,
          loadingUpdateLikeUnlikeReport: {id: '123', isLoading: true}
        }
      };
      mockStore.setState(state);

      let loadingValue = false;
      let idValue = '';

      // Act:
      handler.loadingUpdateLikeUnlikeReport$.subscribe(({id, isLoading}) => {
        loadingValue = isLoading;
        idValue = id;
      });

      // Assert:
      expect(loadingValue).toBe(true);
      expect(idValue).toBe('123');
    });
    
  });
});
