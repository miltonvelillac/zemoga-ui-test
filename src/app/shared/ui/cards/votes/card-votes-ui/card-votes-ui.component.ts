import { Component, OnInit } from '@angular/core';
import { CheckedThumbData } from '../../../radio-btns/thumbs-radio/thumbs-radio.component';

@Component({
  selector: 'app-card-votes-ui',
  templateUrl: './card-votes-ui.component.html',
  styleUrls: ['./card-votes-ui.component.scss']
})
export class CardVotesUiComponent implements OnInit {

  checkedThumb: CheckedThumbData = 'up';

  constructor() { }

  ngOnInit(): void {
  }

  thumbSelected(selected: CheckedThumbData): void {
    console.log(selected);
  }

}
