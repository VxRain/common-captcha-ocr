import Fastify from "fastify";
import multipart from "@fastify/multipart";
import { ocrBase64ImgHandler, ocrBase64ImgSchema, ocrImgHandler } from "./routes/index.js";

async function main() {
  const app = Fastify({
    logger: true,
  });
  app.register(multipart, {
    limits: {
      files: 1,
      fileSize: 50000,
    },
  });

  /** 提交base64格式图片，识别验证码 */
  app.post("/ocrBase64Img", ocrBase64ImgSchema, ocrBase64ImgHandler);
  /** 上传图片，识别验证码 */
  app.post("/ocrImg", ocrImgHandler);

  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
