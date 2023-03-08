import { Injectable } from '@nestjs/common';

import { constants, IResponse } from '@monorepo-js/common';

@Injectable()
export class AppService {
  getData(): IResponse<string> {
    const companyName = constants.COMPANY_NAME;
    return { message: 'success', data: `Welcome to ${companyName}!` };
  }
}
