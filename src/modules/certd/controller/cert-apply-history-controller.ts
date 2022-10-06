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
import { CertApplyHistoryService } from '../service/cert-apply-history-service';

/**
 * 证书申请历史
 */
@Provide()
@Controller('/api/certd/cert-apply-history')
export class CertApplyHistoryController extends CrudController<CertApplyHistoryService> {
  @Inject()
  service: CertApplyHistoryService;

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
