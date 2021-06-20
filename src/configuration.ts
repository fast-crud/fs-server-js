import { Configuration, App } from '@midwayjs/decorator';
import { Application } from '@midwayjs/koa';
import * as bodyParser from 'koa-bodyparser';
import * as orm from '@midwayjs/orm';
import * as cache from '@midwayjs/cache';
import { join } from 'path';
import * as flyway from './components/flyway/src/index';
@Configuration({
  imports: [
    orm, // 加载 orm 组件
    flyway, //加载flyway组件
  ],
})
export class ContainerConfiguration {}
@Configuration({
  conflictCheck: true,
  imports: [
    orm, // 加载 orm 组件
    cache,
  ],
  importConfigs: [
    join(__dirname, './config'), // 加载配置文件（eggjs 下不需要）
  ],
})
export class ContainerLifeCycle {
  @App()
  app: Application;

  async onReady() {
    // bodyparser options see https://github.com/koajs/bodyparser
    this.app.use(bodyParser());
    this.app.use(await this.app.generateMiddleware('reportMiddleware'));

    //统一异常处理
    this.app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        console.error(error);
        // 响应用户
        ctx.status = error.statusCode || error.status || 500;
        ctx.body = error.message;
        ctx.app.emit('error', error); // 触发应用层级错误事件
      }
    });
    this.app.use(
      await this.app.generateMiddleware('globalExceptionMiddleware')
    );
    this.app.use(await this.app.generateMiddleware('authorityMiddleware'));
  }
}
