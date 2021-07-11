import {
  AbstractAccess,
  AbstractAccessPlugin,
} from '../../api/abstract-access';
import { PluginDefine } from '../../api/d';
export class AliyunAccess implements AbstractAccess {
  type: 'aliyun';
  accessKeyId;
  accessKeySecret;
}
export class AliyunAccessProviderImpl extends AbstractAccessPlugin {
  define(): PluginDefine {
    return {
      name: 'aliyun',
      label: '阿里云',
      desc: '',
      inputs: {
        accessKeyId: {
          type: String,
          label: 'accessKeyId',
          component: {
            name: 'a-input',
            vModel: 'value',
            placeholder: 'accessKeyId',
          },
          rules: [{ required: true, message: '必填项' }],
        },
        accessKeySecret: {
          type: String,
          label: 'accessKeySecret',
          component: {
            name: 'a-input',
            vModel: 'value',
            placeholder: 'accessKeySecret',
          },
          rules: [{ required: true, message: '必填项' }],
        },
      },
    };
  }
}

export const AliyunAccessProvider = new AliyunAccessProviderImpl();
