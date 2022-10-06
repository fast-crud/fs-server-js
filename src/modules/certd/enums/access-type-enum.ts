import { EnumItem } from '../../../basic/enum-item';
import * as _ from 'lodash';
class AccessType {
  ALIYUN = new EnumItem('aliyun', '阿里云', 'blue');
  TENCENT = new EnumItem('tencent', '腾讯云', 'blue');
  QINIU = new EnumItem('qiniu', '七牛云', 'blue');
  DNSPOD = new EnumItem('dnspod', 'DnsPod', 'blue');
  SSH = new EnumItem('ssh', 'SSH主机', 'blue');

  names() {
    const list = [];
    _.forEach(this, (item, key) => {
      list.push(item);
    });
    return list;
  }
}

export const AccessTypeEnum = new AccessType();
