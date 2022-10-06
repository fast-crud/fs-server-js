import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 任务执行记录
 */
@EntityModel('cd_task_history')
@Entity('cd_task_history')
export class TaskHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', comment: '用户id' })
  userId: number;

  @Column({ name: 'task_id', comment: '任务id' })
  taskId: number;

  @Column({ name: 'cert_id', comment: '证书' })
  certId: number;

  @Column({ name: 'cert_apply_history_id', comment: '证书申请记录id' })
  certApplyHistoryId: number;

  @Column({ comment: '执行成功', nullable: true })
  success: boolean;

  @Column({ comment: '任务结果', length: 2048, nullable: true })
  result: string;

  @Column({
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
  @Column({
    name: 'update_time',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;
}
