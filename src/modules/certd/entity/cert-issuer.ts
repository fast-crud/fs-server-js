import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 证书签发者
 */
@EntityModel('cd_cert_issuer')
@Entity('cd_cert_issuer')
export class CertIssuerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', comment: '用户id' })
  userId: number;

  @Column({ comment: '类型', length: 20 })
  type: string;

  @Column({ comment: '账号', length: 100 })
  account: string;

  @Column({
    name: 'private_key',
    comment: '私钥',
    length: 1024,
    nullable: true,
  })
  privateKey: string;

  @Column({ name: 'setting', comment: '设置', nullable: true })
  setting: string;

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
