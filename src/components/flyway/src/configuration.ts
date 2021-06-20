import { Configuration, Logger } from '@midwayjs/decorator';
import { Flyway } from './flyway';
import { ILogger } from '@midwayjs/logger';

@Configuration({
  namespace: 'flyway',
  //importConfigs: [join(__dirname, './config')],
})
export class FlywayConfiguration {
  @Logger()
  logger: ILogger;
  async onReady(contanier) {
    await new Flyway({ logger: this.logger }).run();
  }

}
