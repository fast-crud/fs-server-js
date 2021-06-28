import {EntityModel} from '@midwayjs/orm';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

/**
 * 证书
 */
@EntityModel('task')
@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '任务名称', length: 100, nullable: true })
  name: string;

  @Column({ comment: '任务类型', length: 100, nullable: true })
  type: string;

  @Column({ comment: '任务配置', length: 2048, nullable: true })
  setting: string;


  /**
   * 证书
   */
  @Column({ name:"cert_id",comment: '证书' })
  certId: number;

  @Column({ name:"last_history_id",  comment: '最后一次执行id',  nullable: true })
  lastHistoryId: number;

  @Column({ name: 'last_success_id', comment: '最后一次成功id', nullable: true })
  lastSuccessId: number;


  @Column({ comment: '备注', length: 100, nullable: true })
  remark: string;

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
