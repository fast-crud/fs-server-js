import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { AccessEntity } from '../entity/access';

/**
 * 授权
 */
@Provide()
export class AccessService extends BaseService {
  @InjectEntityModel(AccessEntity)
  repository: Repository<AccessEntity>;

  getRepository() {
    return this.repository;
  }
}
