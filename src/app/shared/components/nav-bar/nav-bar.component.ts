import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routesData } from '../../utils/constants/routes.constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

  routes = routesData;

  constructor() { }

}
