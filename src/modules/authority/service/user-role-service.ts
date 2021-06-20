import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { UserRoleEntity } from '../entity/user-role';

/**
 * 用户->角色
 */
@Provide()
export class UserRoleService extends BaseService {
  @InjectEntityModel(UserRoleEntity)
  repository: Repository<UserRoleEntity>;

  getRepository() {
    return this.repository;
  }
}
