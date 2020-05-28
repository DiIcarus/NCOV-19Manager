import io from "socket.io-client";
import * as config__ from "./../config";
interface config {
  URI_Scheme: string,
  host:string,
  port:string,
}
export class SocketIOClient{
  socket = io(config__.HOST);
  getDataVN = (res:any) => {
    this.socket.on('data-vn', res);
  }

  getDataGlobal = (res:any) => {
    this.socket.on('data-global',res);
  }

  getDataAll = (res:any) => {
    this.socket.on('data-all', res);
  }

  getDataLocation = (res:any) => {
    this.socket.on('data-location', res);
  }
}