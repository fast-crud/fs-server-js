import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { DnsProviderEntity } from '../entity/dns-provider';

/**
 * dns提供者
 */
@Provide()
export class DnsProviderService extends BaseService {
  @InjectEntityModel(DnsProviderEntity)
  repository: Repository<DnsProviderEntity>;

  getRepository() {
    return this.repository;
  }
}
