import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../basic/base-service';
import { CertEntity } from '../entity/cert';

/**
 * 证书申请
 */
@Provide()
export class CertService extends BaseService {
  @InjectEntityModel(CertEntity)
  repository: Repository<CertEntity>;

  getRepository() {
    return this.repository;
  }
}
