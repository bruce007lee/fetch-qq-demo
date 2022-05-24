import axios from 'axios';
import { QQInfo } from '../../types';

export default {
  /**
   * 根据qq号获取qq信息
   */
  async getQQInfo(params: { qq: string }): Promise<QQInfo | null> {
    let result: QQInfo;
    try {
      const rs = await axios.get('https://api.uomg.com/api/qq.info', {
        params,
      });

      result = rs?.data || {};

    } catch (e) {
      throw new Error(`网络请求错误:${e.message}`);
    }

     // 如果业务报错也返回异常
     if (result?.msg) {
      throw new Error(result.msg);
    }

    // 无账号？
    if (!result || !result?.name){
      throw new Error(`查询的qq账号不存在`);
    }

    return result;
  },
};
