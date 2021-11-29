import { Configuration, App } from '@midwayjs/decorator';
import { Application } from '@midwayjs/koa';
import * as bodyParser from 'koa-bodyparser';
import * as orm from '@midwayjs/orm';
import * as cache from '@midwayjs/cache';
import * as cors from '@koa/cors';
import { join } from 'path';
import * as flyway from 'midway-flyway-js';
@Configuration({
  imports: [
    orm, // 加载 orm 组件
    flyway, //加载flyway组件
    cache,
  ],
})
export class ContainerConfiguration {}
@Configuration({
  conflictCheck: true,
  importConfigs: [
    join(__dirname, './config'), // 加载配置文件（eggjs 下不需要）
  ],
})
export class ContainerLifeCycle {
  @App()
  app: Application;

  async onReady() {
    //跨域
    this.app.use(
      cors({
        origin: '*',
      })
    );
    // bodyparser options see https://github.com/koajs/bodyparser
    this.app.use(bodyParser());
    //请求日志打印
    this.app.use(await this.app.generateMiddleware('reportMiddleware'));

    //统一异常处理
    this.app.use(
      await this.app.generateMiddleware('globalExceptionMiddleware')
    );
    //预览模式限制修改id<1000的数据
    this.app.use(await this.app.generateMiddleware('previewMiddleware'));

    //授权处理
    // this.app.use(await this.app.generateMiddleware('authorityMiddleware'));
  }
}
