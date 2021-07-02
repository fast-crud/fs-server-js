import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { DnsResolverEntity } from '../entity/dns-resolver';

/**
 * dns提供者
 */
@Provide()
export class DnsResolverService extends BaseService {
  @InjectEntityModel(DnsResolverEntity)
  repository: Repository<DnsResolverEntity>;

  getRepository() {
    return this.repository;
  }
}
