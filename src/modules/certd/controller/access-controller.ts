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
import { AccessService } from '../service/access-service';
import { AccessProviderService } from '../core/service/access-provider-service';
import * as _ from 'lodash';
/**
 * 授权
 */
@Provide()
@Controller('/api/certd/access')
export class AccessController extends CrudController<AccessService> {
  @Inject()
  service: AccessService;

  @Inject()
  accessProviderService: AccessProviderService;

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
  @Post('/providers')
  async providers() {
    const providers = this.accessProviderService.getAccessProviders();
    const list = [];
    _.forEach(providers, item => {
      list.push(item.define);
    });
    return this.ok(list);
  }
}
