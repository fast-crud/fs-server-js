import { AbstractAccess, AccessDefine } from '../../api/abstract-access';
export class AliyunAccess implements AbstractAccess {
  type: 'aliyun';
  accessKeyId;
  accessKeySecret;
}
export class AliyunAccessProvider {
  static type() {
    return AliyunAccess;
  }
  static define(): AccessDefine {
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
            placeholder: 'accessKeyId',
            rules: [{ required: true, message: '必填项' }],
          },
        },
        accessKeySecret: {
          type: String,
          label: 'accessKeySecret',
          component: {
            name: 'a-input',
            placeholder: 'accessKeySecret',
            rules: [{ required: true, message: '必填项' }],
          },
        },
      },
    };
  }
}
