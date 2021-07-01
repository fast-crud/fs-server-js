import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { TaskHistoryEntity } from '../entity/task-history';

/**
 * 任务执行历史记录
 */
@Provide()
export class TaskHistoryService extends BaseService {
  @InjectEntityModel(TaskHistoryEntity)
  repository: Repository<TaskHistoryEntity>;

  getRepository() {
    return this.repository;
  }
}
