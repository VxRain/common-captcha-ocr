import * as ffi from "ffi-napi";

export const ocrLib = ffi.Library("./src/lib/ocr.dll", {
  init: ["void", []],
  ocr: ["string", ["pointer", "int"]],
  un: ["void", []],
});

ocrLib.init();

export function ocrBuffer(buffer: Buffer): string {
  return ocrLib.ocr(buffer as any, buffer.byteLength);
}

export function ocrBase64Img(base64: string): string {
  const buffer = Buffer.from(base64, "base64");
  return ocrBuffer(buffer);
}
