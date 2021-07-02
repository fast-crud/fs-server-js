import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * dns提供者
 */
@EntityModel('dns_resolver')
@Entity('dns_resolver')
export class DnsResolverEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', comment: '用户id' })
  userId: number;
  @Column({ comment: '类型', length: 20 })
  type: string;

  @Column({ comment: '名称', length: 100 })
  name: string;

  @Column({ name: 'access_id', comment: '授权id' })
  accessId: number;

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
}
