import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { votesMock } from 'src/app/shared/mocks/vote.mock';
import { Vote } from 'src/app/shared/models/vote.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent implements OnInit {

  votes: Vote[] = votesMock;

  constructor() { }

  ngOnInit(): void {
  }

  votesElementId(_: number, voteItem: Vote): string {
    return voteItem.id;
  }

}
