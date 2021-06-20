import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 系统用户
 */
@EntityModel('sys_user')
@Entity('sys_user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Index({ unique: true })
  @Column({ comment: '用户名', length: 100 })
  username: string;

  @Column({ comment: '密码' })
  password: string;

  @Column({ comment: '昵称', nullable: true })
  nickName: string;

  @Column({ comment: '头像', nullable: true })
  avatar: string;

  @Column({ comment: '区号', nullable: true })
  phoneCode: string;
  @Index()
  @Column({ comment: '手机', nullable: true, length: 20 })
  mobile: string;

  @Column({ comment: '邮箱', nullable: true })
  email: string;

  @Column({ comment: '状态 0:禁用 1：启用', default: 1, type: 'int' })
  status: number;
  @Column({ comment: '创建时间', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;
  @Column({ comment: '修改时间', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  // @ManyToMany(type => RoleEntity, res => res.users)
  // @JoinTable({
  //   name: 'sys_user_roles',
  //   joinColumn: {
  //     name: 'userId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'roleId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // roles: RoleEntity[];
}
