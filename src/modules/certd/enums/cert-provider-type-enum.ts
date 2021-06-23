import { EnumItem } from '../../../basic/enum-item';
import * as _ from 'lodash';
class CertProviderType {
  LETENCRYPT = new EnumItem('letencrypt', 'LetEncrypt', 'blue');

  names() {
    const list = [];
    _.forEach(this, (item, key) => {
      list.push(item);
    });
    return list;
  }
}

export const CertProviderTypeEnum = new CertProviderType();
