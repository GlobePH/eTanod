import { Component } from '@angular/core';

import { ReportsPage } from '../reports/reports';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReportsPage;
  tab2Root = ProfilePage;

  constructor() {

  }
}
