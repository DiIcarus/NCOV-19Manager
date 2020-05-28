import * as socket from 'socket.io-client';

export class SocketConnection {
  socket = null;
  initSocket=(host:string,port:string)=>{
    // this.socket = io(host+":"+port);
  }
}