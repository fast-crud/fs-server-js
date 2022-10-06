export type CertHistoryVO = {
  certId;
  crt;
  key;
  expireDate;
  timestamp;
  success: boolean;
  domains: Array<string>;
};
export type TaskHistoryVO = {
  certId;
  timestamp;
  success: boolean;
  result: any;
};
export type TaskExecuteParams = {
  props: any;
  lastCert: CertHistoryVO;
  lastTask: TaskHistoryVO;
};
export type TaskExecuteResult = {
  result: any;
};
export type TaskRollbackParams = {
  props: any;
  lastCert: CertHistoryVO;
  lastTask: TaskHistoryVO;
};
export type TaskRollbackResult = {
  result: any;
};
export interface Task {
  /**
   * 任务执行
   */
  execute: (options: TaskExecuteParams) => Promise<TaskExecuteResult>;

  /**
   * 删除痕迹
   */
  rollback: (options: TaskRollbackParams) => Promise<TaskRollbackResult>;
}
