import {EntityModel} from '@midwayjs/orm';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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
@EntityModel('cert')
@Entity('cert')
export class CertEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 域名
   */
  //@Index({ unique: true })
  @Column({ comment: '域名', length: 1024 })
  domains: string;

  @Column({ comment: '邮箱', length: 100 })
  email: string;

  @Column({ name: 'cert_provider_id', comment: '证书提供者ID', length: 100, nullable: true })
  certProviderId: number;

  @Column({ name: 'validate_type', comment: '校验类型', length: 100, nullable: true })
  validateType: string;

  @Column({ name: 'validate_access_id', comment: '校验授权', nullable: true })
  validateAccessId: number;

  @Column({  comment: '国家', length: 100, nullable: true })
  country: string;

  @Column({  comment: '省份', length: 100, nullable: true })
  state: string;

  @Column({ comment: '市区', length: 100, nullable: true })
  locality: string;

  @Column({  comment: '组织/公司', length: 100, nullable: true })
  organization: string;

  @Column({ name: 'organization_unit', comment: '部门', length: 100, nullable: true })
  organizationUnit: string;


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
