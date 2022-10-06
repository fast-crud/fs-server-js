export interface ComponentDefine {
  name?: string;
  placeholder?: string;
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

  rules?: any[];
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
 */
export type PluginDefine = {
  /**
   * 类型名称，如：aliyun
   */
  name: string;
  /**
   * 显示名称，如阿里云
   */
  label: string;
  /**
   * 类型说明
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

export interface Plugin {
  getPluginType(): string;
  define(): PluginDefine;
}
