


 /**
  * 
  * @param {*} value 手机号
  */


  /**
   * 
   * ts  强类型语言
   * 
   * 类型注解：明确参数的是什么类型
   *          明确函数的返回类型
  */

export function validate_Phone(value:string):boolean{  
    let regPhone = /^1[3456789]\d{9}$/;
    return regPhone.test(value);
}

// 正则校验密码
export function validate_Password(value:string):boolean{
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value);
}