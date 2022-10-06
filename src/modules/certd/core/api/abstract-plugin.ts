import { Plugin } from './d';
import { CertdPluginContext } from './index';

export abstract class AbstractPlugin implements Plugin {
  abstract define();
  abstract getPluginType();

  constructor() {
    CertdPluginContext.register(this.getPluginType(), this);
  }
}
