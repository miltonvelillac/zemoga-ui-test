import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { Report } from 'src/app/shared/models/report.model';
import { CloneDataInDeep } from 'typescript-clone-data-in-deep';
import * as ReportSelectors from './report.selectors';

describe('ReportSelectors', () => {
  describe('#selectAllReports', () => {
    it('should return all reports on the state', () => {
      // Arrange
      const reports: Report[] = CloneDataInDeep.clone(reportsMock.slice(0, 2));

      const appState = {
        reports: {
          entities: { [reports[0].id]: reports[0], [reports[1].id]: reports[1] },
          ids: [reports[0].id, reports[1].id]
        }
      };

      // Act
      const result = ReportSelectors.selectGetAllReporters(appState);

      // Assert
      expect(result).toEqual(reports);
    });
  });

  describe('#selectLoadingGetAllReports', () => {
    it('should return the selectLoadingGetAllReports state', () => {
      // Arrange
      const appState = {
        reports: {
          loadingGetAllReports: true
        }
      };

      // Act
      const result = ReportSelectors.selectLoadingGetAllReports(appState);

      // Assert
      expect(result).toBe(true);
    });
  });

  describe('#selectLoadingUpdateLikeUnlikeReport', () => {
    it('should return the selectLoadingUpdateLikeUnlikeReport state', () => {
      // Arrange
      const appState = {
        reports: {
          loadingUpdateLikeUnlikeReport: {id: '1', isLoading: true}
        }
      };

      // Act
      const result = ReportSelectors.selectLoadingUpdateLikeUnlikeReport(appState);

      // Assert
      expect(result).toEqual({id: '1', isLoading: true});
    });
  });

});
