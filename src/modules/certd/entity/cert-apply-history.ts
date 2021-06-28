import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 证书
 */
@EntityModel('cert_apply_history')
@Entity('cert_apply_history')
export class CertApplyHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', comment: '用户id' })
  userId: number;
  /**
   * 证书
   */
  @Column({ name: 'cert_id', comment: '证书id', length: 1024 })
  certId: number;

  @Column({ comment: '成功', nullable: true })
  success: boolean;

  @Column({ comment: '运行结果', length: 1024, nullable: true })
  result: string;

  @Column({
    name: 'cert_crt',
    comment: '证书内容',
    length: 1024,
    nullable: true,
  })
  certCrt: string;
  @Column({
    name: 'cert_key',
    comment: '证书Key',
    length: 1024,
    nullable: true,
  })
  certKey: string;

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
