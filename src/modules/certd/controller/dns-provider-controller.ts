import {
  ALL,
  Body,
  Controller,
  Inject,
  Post,
  Provide,
  Query,
} from '@midwayjs/decorator';
import { CrudController } from '../../../basic/crud-controller';
import { CertIssuerService } from '../service/cert-issuer-service';
import { DnsProviderService } from '../service/dns-provider-service';

/**
 * dns提供者
 */
@Provide()
@Controller('/api/certd/dns-provider')
export class DnsProviderController extends CrudController<DnsProviderService> {
  @Inject()
  service: CertIssuerService;

  getService() {
    return this.service;
  }

  @Post('/page')
  async page(@Body(ALL) body) {
    return super.page(body);
  }

  @Post('/add')
  async add(@Body(ALL) bean) {
    return super.add(bean);
  }

  @Post('/update')
  async update(@Body(ALL) bean) {
    return super.update(bean);
  }
  @Post('/delete')
  async delete(@Query() id) {
    return super.delete(id);
  }
}
