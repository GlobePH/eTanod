import { Component } from '@angular/core';

import { ReportsPage } from '../reports/reports';
import { ProfilePage } from '../profile/profile';
import { StorePage } from '../store/store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReportsPage;
  tab2Root = ProfilePage;
  tab3Root = StorePage;

  constructor() {

  }
}
