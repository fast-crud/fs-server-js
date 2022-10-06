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
import { TaskHistoryService } from '../service/task-history-service';

/**
 * 任务历史
 */
@Provide()
@Controller('/api/certd/task-history')
export class TaskHistoryController extends CrudController<TaskHistoryService> {
  @Inject()
  service: TaskHistoryService;

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
