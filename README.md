# 通用验证码识别 Common Captcha OCR

封装了一个通用的验证码识别模块。提供 API 接口以便于在本地的业务开发中进行调用。

API:

- `/ocrImg` 识别图片文件验证码  
  上传图片识别验证码，返回识别结果  
  方法：`POST`  
  Content-Type: `multipart/form-data`
- `/ocrBase64Im` 识别 Base64 格式验证码  
  提交图片的 Base64 文本，识别验证码，返回识别结果  
  方法：`POST`  
  Content-Type: `application/json`  
  请求体参数：`{"base64Img": ""}`

⚠️ 限制：

- 只支持 Windows 操作系统
- 因为动态链接库的限制，Node.js 需要为 32 位  
  使用本项目时请借助 Node.js 版本管理工具切换为 32 位，如果有更好的实现方法，欢迎提交 PR 😊
