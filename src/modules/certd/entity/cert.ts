import { EntityModel } from '@midwayjs/orm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 证书
 * domains: ['*.docmirror.cn'],
 email: 'xiaojunnuo@qq.com',
 dnsProvider: {
      type:'aliyun',
      accessProvider:'aliyun'
    },
 csrInfo: {
      country: 'CN',
      state: 'GuangDong',
      locality: 'ShengZhen',
      organization: 'CertD Org.',
      organizationUnit: 'IT Department',
      emailAddress: 'xiaojunnuo@qq.com'
    }
 */
@EntityModel('cd_cert')
@Entity('cd_cert')
export class CertEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', comment: '用户id' })
  userId: number;
  /**
   * 域名
   */
  @Column({ comment: '域名', length: 2048 })
  domains: string;

  @Column({ comment: '邮箱', length: 100 })
  email: string;

  @Column({
    name: 'cert_issuer_id',
    comment: '证书提供者ID',
    nullable: true,
  })
  certIssuerId: number;

  @Column({
    name: 'challenge_type',
    comment: '校验挑战类型',
    length: 100,
    nullable: true,
  })
  challengeType: string;

  @Column({
    name: 'challenge_access_id',
    comment: '校验挑战授权',
    nullable: true,
  })
  challengeAccessId: number;

  @Column({
    name: 'dns_resolver_id',
    comment: 'dns解析',
    nullable: true,
  })
  dnsResolverId: number;

  @Column({ comment: '国家', length: 100, nullable: true })
  country: string;

  @Column({ comment: '省份', length: 100, nullable: true })
  state: string;

  @Column({ comment: '市区', length: 100, nullable: true })
  locality: string;

  @Column({ comment: '组织/公司', length: 100, nullable: true })
  organization: string;

  @Column({
    name: 'organization_unit',
    comment: '部门',
    length: 100,
    nullable: true,
  })
  organizationUnit: string;

  @Column({ comment: '备注', length: 100, nullable: true })
  remark: string;

  @Column({
    name: 'last_history_id',
    comment: '最后一次执行id',
    nullable: true,
  })
  lastHistoryId: number;

  @Column({
    name: 'last_success_id',
    comment: '最后一次成功id',
    nullable: true,
  })
  lastSuccessId: number;

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
