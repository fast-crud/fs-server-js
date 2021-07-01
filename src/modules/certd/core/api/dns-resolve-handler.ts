export interface DnsResolveHandler {
  /**
   * 添加域名解析记录
   * @param fullRecord
   * @param type
   * @param value
   */
  createRecord: ({ fullRecord, type, value }) => any;

  /**
   * 删除域名解析记录
   * @param fullRecord
   * @param type
   * @param value
   * @param record
   */
  removeRecord: ({ fullRecord, type, value, record }) => void;
}
