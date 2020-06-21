'use strict';
const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  //event为客户端上传的参数
  const wxContext = cloud.getWXContext()
  //返回数据给客户端
  return wxContext
};
