import { Provide } from '@midwayjs/decorator';
import { CertdPluginContext } from '../api';

@Provide()
export class AccessProviderService {
  context = CertdPluginContext;
  getAccessProviders() {
    const register = this.context.getRegistry('access');
    return register.collection;
  }
}
