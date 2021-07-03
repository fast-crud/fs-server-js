import { join } from 'path';
/**
 * 演示环境
 */
export const preview = {
  enabled: false,
};
/**
 * 单数据库实例
 */
export const orm = {
  type: 'sqlite',
  database: join(__dirname, '../../data/db.sqlite'),
  synchronize: false,
  logging: true,
};

export const flyway = {
  // scriptDir:join(__dirname, '../../db/migration'),
};

export const biz = {
  jwt: {
    secret: 'greper-is-666',
    expire: 7 * 24 * 60, //单位秒
  },
  auth: {
    ignoreUrls: ['/', '/api/login', '/api/register'],
  },
};
