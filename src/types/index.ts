export type QQInfo = {
    /**用户名 */
   name: string;
   /** 返回的状态码 */
   code: string;
   /** 返回查询的QQ */
   qq: string;
   /** 返回QQ头像地址 */
   qlogo: string;
   /** 返回绿钻相关信息 */
   lvzuan: {
     code: number;
     subcode: number;
     level: number;
     vip: number;
     score: number;
     place: number;
     payway: number;
     isyear: number;
     vendor: number;
   };
   /** 返回错误提示信息 */
   msg: string;
 };