import {EntityModel} from '@midwayjs/orm';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

/**
 * 权限配置
 */
@EntityModel('access')
@Entity('access')
export class AccessEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: '名称', length: 100 })
  name: string;

  @Column({ comment: '类型', length: 100 })
  type: string;

  @Column({ name: 'setting', comment: '设置', length: 1024, nullable: true })
  setting: string;

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
