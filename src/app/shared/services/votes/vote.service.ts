import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { votesMock } from '../../mocks/vote.mock';
import { Vote } from '../../models/vote.model';
import { StoragaManagment } from '../../utils/storage/storaga.class';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  storageName = 'votes';

  constructor() { }

  getAllVotes(): Observable<Vote[]> {
    let votes: Vote[] = StoragaManagment.getLocalStorage(this.storageName);
    if (!votes) {
      StoragaManagment.saveLocalStorage(this.storageName, votesMock);
      votes = votesMock;
    }
    return of(votes).pipe(delay(1000));
  }

  updateLikeUnlikeVotes(id: string, isLike: boolean): Observable<Vote | undefined> {
    const votes: Vote[] = StoragaManagment.getLocalStorage(this.storageName);
    let updatedVote: Vote | undefined;
    const voteToUpdate = votes.map(vote => {
      if (vote.id === id) {
        updatedVote = isLike ? {...vote, like: vote.like++} : {...vote, unlike: vote.unlike++};
        return updatedVote;
      }
      return vote;
    });
    StoragaManagment.saveLocalStorage(this.storageName, voteToUpdate);
    return of(updatedVote).pipe(delay(1000));
  }
}
