import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { TaskEntity } from '../entity/task';

/**
 * 授权
 */
@Provide()
export class TaskService extends BaseService {
  @InjectEntityModel(TaskEntity)
  repository: Repository<TaskEntity>;

  getRepository() {
    return this.repository;
  }
}
