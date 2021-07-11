import { AbstractPlugin } from './abstract-plugin';

export abstract class AbstractAccessPlugin extends AbstractPlugin {
  getPluginType() {
    return 'access';
  }

  abstract define();
}

export class AbstractAccess {
  type: string;
}
