export type TaskExecuteParams = {
  props: any;
  cert: any;
  context: any;
};
export interface Task {
  /**
   * 执行
   * @param options
   * @returns {Promise<void>}
   */
  execute: (options: TaskExecuteParams) => Promise<any>;
}
