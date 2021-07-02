import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { CertProviderEntity } from '../entity/cert-provider';

/**
 * cert provider
 */
@Provide()
export class CertProviderService extends BaseService {
  @InjectEntityModel(CertProviderEntity)
  repository: Repository<CertProviderEntity>;

  getRepository() {
    return this.repository;
  }
}
