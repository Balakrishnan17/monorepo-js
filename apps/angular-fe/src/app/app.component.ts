import { Component } from '@angular/core';

import { constants } from '@monorepo-js/common';

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fe';
  companyName = constants.COMPANY_NAME;
}
