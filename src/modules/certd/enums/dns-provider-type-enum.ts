import { EnumItem } from '../../../basic/enum-item';
import * as _ from 'lodash';
class DnsProviderType {
  ALIYUN = new EnumItem('aliyun', '阿里云', 'blue');
  DNSPOD = new EnumItem('dnspod', 'DnsPod', 'blue');

  names() {
    const list = [];
    _.forEach(this, (item, key) => {
      list.push(item);
    });
    return list;
  }
}

export const DnsProviderTypeEnum = new DnsProviderType();
