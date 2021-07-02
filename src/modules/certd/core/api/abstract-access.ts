export interface ComponentDefine {
  name?: string;
  placeholder?: string;
  rules?: any[];
  [propName: string]: any;
}
export type InputDefine = {
  /**
   * 数据类型
   */
  type;
  /**
   * 显示名称
   */
  label: string;
  /**
   * 组件
   */
  component?: ComponentDefine;
  /**
   * 字段说明
   */
  helper?: string;
  /**
   * required
   */
  required?: boolean;
};
/**
 * 输入参数定义
 */
export type InputsDefine = {
  [key: string]: InputDefine;
};
/**
 * 输出参数
 */
export type OutputDefine = {
  name: string;
  type: any;
};
/**
 * 输出参数定义
 */
export type OutputsDefine = {
  [key: string]: OutputDefine;
};

/**
 * access定义
 */
export type AccessDefine = {
  /**
   * access类型名称，如：aliyun
   */
  name: string;
  /**
   * access类型显示名称，如阿里云
   */
  label: string;
  /**
   * access类型说明
   */
  desc?: string;

  /**
   * 帮助链接
   */
  helpLink?: string;
  /**
   * 输入参数
   */
  inputs?: InputsDefine;
  /**
   * 输出参数
   */
  outputs?: OutputsDefine;
};

export interface AbstractAccess {
  type: string;
}
