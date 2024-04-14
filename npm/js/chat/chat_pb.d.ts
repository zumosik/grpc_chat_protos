import * as jspb from 'google-protobuf'



export class Token extends jspb.Message {
  getToken(): Uint8Array | string;
  getToken_asU8(): Uint8Array;
  getToken_asB64(): string;
  setToken(value: Uint8Array | string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: Uint8Array | string,
  }
}

export class Message extends jspb.Message {
  getChatid(): string;
  setChatid(value: string): Message;

  getText(): string;
  setText(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    chatid: string,
    text: string,
  }
}

export class SendMsgRequest extends jspb.Message {
  getAuthtoken(): Token | undefined;
  setAuthtoken(value?: Token): SendMsgRequest;
  hasAuthtoken(): boolean;
  clearAuthtoken(): SendMsgRequest;

  getChatmessage(): Message | undefined;
  setChatmessage(value?: Message): SendMsgRequest;
  hasChatmessage(): boolean;
  clearChatmessage(): SendMsgRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMsgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMsgRequest): SendMsgRequest.AsObject;
  static serializeBinaryToWriter(message: SendMsgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMsgRequest;
  static deserializeBinaryFromReader(message: SendMsgRequest, reader: jspb.BinaryReader): SendMsgRequest;
}

export namespace SendMsgRequest {
  export type AsObject = {
    authtoken?: Token.AsObject,
    chatmessage?: Message.AsObject,
  }
}

export class ChatResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ChatResponse;

  getErrormsg(): string;
  setErrormsg(value: string): ChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
  static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
  export type AsObject = {
    success: boolean,
    errormsg: string,
  }
}

