import { FastifyReply, FastifyRequest } from "fastify";
import { ocrBase64Img, ocrBuffer } from "../utils/index.js";

export const ocrBase64ImgSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        base64Img: { type: "string" },
      },
      required: ["base64Img"],
    },
  },
};

export async function ocrBase64ImgHandler(req: FastifyRequest, _res: FastifyReply) {
  const { body } = <{ body: { base64Img: string } }>req;
  return {
    text: ocrBase64Img(body.base64Img),
  };
}

export async function ocrImgHandler(req: FastifyRequest, _res: FastifyReply) {
  const file = await req.file();
  if (!file.mimetype.startsWith("image/")) {
    return {
      msg: "只允许上传图片",
    };
  }
  const buffer = await file.toBuffer();
  return {
    text: ocrBuffer(buffer),
  };
}
