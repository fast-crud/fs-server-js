import {EntityModel} from '@midwayjs/orm';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


/**
 * 证书提供者
 */
@EntityModel('cert_provider')
@Entity('cert_provider')
export class CertProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //@Index({ unique: true })
  @Column({ comment: '类型', length: 20 })
  type: string;

  @Column({ comment: '账号', length: 100 })
  account: string;

  @Column({ name: 'private_key', comment: '私钥', length: 1024, nullable: true })
  privateKey: string;

  @Column({ name: 'setting', comment: '设置', nullable: true })
  setting:string

  @Column({
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
  @Column({
    name: 'create_time',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
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
