import * as dayjs from 'dayjs';
import { sleep as _sleep } from '../utils/util.sleep';
import { Task } from './task';
export class AbstractTask implements Task {
  logger;
  accessService;
  constructor(options) {
    if (options == null) {
      throw new Error('插件安装失败：参数不允许为空');
    }
    const { logger, accessService } = options;
    this.logger = logger;
    this.accessService = accessService;
  }

  appendTimeSuffix(name) {
    if (name == null) {
      name = 'certd';
    }
    return name + '-' + dayjs().format('YYYYMMDD-HHmmss');
  }

  async doExecute(options) {
    console.error('请实现此方法,context:', options.context);
  }

  /**
   * 执行
   * @param options
   * @returns {Promise<void>}
   */
  async execute(options) {
    try {
      return await this.execute(options);
    } catch (e) {
      this.logger.error('插件执行出错：', e);
      throw e;
    }
  }

  async doRollback(options) {
    console.error('请实现此方法,rollback:', options.context);
  }

  /**
   * 回退，用于单元测试
   * @param options
   */
  async rollback(options) {
    try {
      return await this.rollback(options);
    } catch (e) {
      this.logger.error('插件rollback出错：', e);
      throw e;
    }
  }

  async getAccess(accessId) {
    const record = await this.accessService.getById(accessId);
    return JSON.parse(record.setting);
  }

  async sleep(time) {
    await _sleep(time);
  }
}
