import { AbstractTask } from '../../../api/abstract-task';

export class AbstractAliyunPlugin extends AbstractTask {
  checkRet(ret: any) {
    if (ret.code != null) {
      throw new Error('执行失败：' + ret.message);
    }
  }
}
