import * as _ from 'lodash';
import { DnsResolveHandler } from './dns-resolve-handler';
export class AbstractDnsProvider implements DnsResolveHandler {
  logger;
  accessService;
  constructor({ logger, accessService }) {
    this.logger = logger;
    this.accessService = accessService;
  }

  /**
   * 添加域名解析记录
   * @param fullRecord
   * @param type
   * @param value
   */
  async createRecord({ fullRecord, type, value }) {
    throw new Error('请实现 createRecord 方法');
  }

  /**
   * 删除域名解析记录
   * @param fullRecord
   * @param type
   * @param value
   * @param record
   */
  async removeRecord({ fullRecord, type, value, record }) {
    throw new Error('请实现 removeRecord 方法');
  }

  /**
   * 获取当前账号下的所有域名列表
   */
  async getDomainList(): Promise<any[]> {
    throw new Error('请实现 getDomainList 方法');
  }

  /**
   * 根据全域名匹配拥有的主域名
   * @param dnsRecordDomain, 例如 xxx.yourdomain.com
   * @param domainPropName, 域名记录里面域名的属性名，例如： record.domain
   */
  async getOwnerDomainRecord(
    dnsRecordDomain: string,
    domainPropName: string | ((any) => string)
  ) {
    const list = await this.getDomainList();
    let domainRecord = null;
    for (const item of list) {
      let domain = '';
      if (domainPropName instanceof Function) {
        domain = domainPropName(item);
      } else {
        domain = item[domainPropName];
      }

      if (_.endsWith(dnsRecordDomain, domain)) {
        domainRecord = item;
        break;
      }
    }
    if (!domainRecord) {
      throw new Error('找不到域名,请检查域名是否正确：' + dnsRecordDomain);
    }
    return domainRecord;
  }

  async getAccess(accessId) {
    const record = await this.accessService.getById(accessId);
    return JSON.parse(record.setting);
  }
}
