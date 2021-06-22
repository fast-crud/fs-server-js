import { EntityModel } from '@midwayjs/orm';
import { Entity, PrimaryColumn } from 'typeorm';

/**
 * 用户角色多对多
 */
@EntityModel('sys_user_role')
@Entity('sys_user_role')
export class UserRoleEntity {
  @PrimaryColumn({ name: 'role_id' })
  roleId: number;
  @PrimaryColumn({ name: 'user_id' })
  userId: number;
}
