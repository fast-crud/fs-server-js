import { Config, Provide } from '@midwayjs/decorator';
import {
  IMidwayKoaContext,
  IMidwayKoaNext,
  IWebMiddleware,
} from '@midwayjs/koa';
import { PreviewException } from '../basic/exception/preview-exception';

/**
 * 预览模式
 */
@Provide()
export class PreviewMiddleware implements IWebMiddleware {
  @Config('preview.enabled')
  private preview: boolean;

  resolve() {
    return async (ctx: IMidwayKoaContext, next: IMidwayKoaNext) => {

      let { url, request } = ctx;
      console.log('request query',request.query)

      if (!this.preview) {
        await next();
        return;
      }

      const body: any = request.body;
      let id = body.id || request.query.id;
      if(id != null && typeof id === 'string'){
        id = parseInt(id)
      }
      if(url.indexOf("?")!==-1){
        url = url.substring(0,url.indexOf("?"))
      }
      const isModify = url.endsWith('update') || url.endsWith('delete');
      const isPreviewId = id < 1000;
      if (this.preview && isModify && isPreviewId) {
        throw new PreviewException(
          '对不起，预览环境不允许修改此数据，如需体验请添加新数据'
        );
      }
      await next();
      return;
    };
  }
}
