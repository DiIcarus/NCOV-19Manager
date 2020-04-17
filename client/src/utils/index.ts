const fs = require("fs");
const path = require("path");

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

export const createFileFromBuffer = (uploadPath: string, bytes: any) => {
  let binary = "";
  const len = bytes.length;
  for ( let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const bs64 = Buffer.from(binary, 'binary').toString('base64');
  ensureDirectoryExistence(uploadPath);
  fs.writeFileSync(uploadPath, bs64, "base64");
}

export const makeid = (length: number) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const ensureDirectoryExistence = (filePath: string) => {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export const readFileAsync = (file: File | Blob): Promise<{type: string, buffer: Uint8Array}> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      let { type } = file;
      let buffer = new Uint8Array(reader.result as ArrayBuffer)
      resolve({ type, buffer});
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  })
}

export const readFileContent = (path: string) => {
  let bitmap: ArrayBuffer;
  try {
    bitmap = fs.readFileSync(path);
  }
  catch (e) {
    bitmap = new ArrayBuffer(0);
  }
  return bitmap;
}

export const readUrlAsync = (url: string): Promise<{type: string, buffer: Uint8Array}> => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      let type = "png";
      let buffer = new Uint8Array(xhr.response as ArrayBuffer)
      resolve({ type, buffer});
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.responseType = 'arraybuffer';
    xhr.send();
  })
}

export const readCanvasAsync = (canvas: HTMLCanvasElement): Promise<{type: string, buffer: Uint8Array}> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      let reader = new FileReader();

      reader.onload = () => {
        let buffer = new Uint8Array(reader.result as ArrayBuffer)
        resolve({ type: "image/png", buffer});
      };
  
      reader.onerror = reject;

      reader.readAsArrayBuffer(blob!);
    })
    
  })
}

export const convertFileToBuffer  = async (files: File[]) => {
  let bufferList: Array<{
    type: string,
    buffer: Uint8Array
  }> = [];
  for (let i = 0; i < files.length; i++) {
    bufferList.push(await readFileAsync(files[i]));
  };
  return bufferList;
}

export const convertUrlToBuffer  = async (urls: string[]) => {
  let bufferList: Array<{
    type: string,
    buffer: Uint8Array
  }> = [];
  for (let i = 0; i < urls.length; i++) {
    bufferList.push(await readUrlAsync(urls[i]));
  };
  return bufferList;
}
