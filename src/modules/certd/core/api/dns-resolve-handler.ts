export interface DnsResolveHandler {
  /**
   * 添加域名解析记录
   * @param fullRecord
   * @param type
   * @param value
   * @return 添加成功的记录
   */
  createRecord: ({ fullRecord, type, value }) => Promise<any>;

  /**
   * 删除域名解析记录
   * @param fullRecord
   * @param type
   * @param value
   * @param record createRecord的返回值
   */
  removeRecord: ({ fullRecord, type, value, record }) => Promise<void>;
}
