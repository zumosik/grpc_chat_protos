import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


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

  getFile(): string;
  setFile(value: string): Message;

  getImage(): string;
  setImage(value: string): Message;

  getSticker(): string;
  setSticker(value: string): Message;

  getPayloadCase(): Message.PayloadCase;

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
    file: string,
    image: string,
    sticker: string,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    FILE = 3,
    IMAGE = 4,
    STICKER = 5,
  }
}

export class StreamRequest extends jspb.Message {
  getToken(): Token | undefined;
  setToken(value?: Token): StreamRequest;
  hasToken(): boolean;
  clearToken(): StreamRequest;

  getMsg(): Message | undefined;
  setMsg(value?: Message): StreamRequest;
  hasMsg(): boolean;
  clearMsg(): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    token?: Token.AsObject,
    msg?: Message.AsObject,
  }
}

export class StreamResponse extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): StreamResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): StreamResponse;

  getClientMessage(): Message | undefined;
  setClientMessage(value?: Message): StreamResponse;
  hasClientMessage(): boolean;
  clearClientMessage(): StreamResponse;

  getUserOnline(): StreamResponse.NewUserOnline | undefined;
  setUserOnline(value?: StreamResponse.NewUserOnline): StreamResponse;
  hasUserOnline(): boolean;
  clearUserOnline(): StreamResponse;

  getEventCase(): StreamResponse.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
  static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamResponse;
  static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clientMessage?: Message.AsObject,
    userOnline?: StreamResponse.NewUserOnline.AsObject,
  }

  export class NewUserOnline extends jspb.Message {
    getUserid(): string;
    setUserid(value: string): NewUserOnline;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewUserOnline.AsObject;
    static toObject(includeInstance: boolean, msg: NewUserOnline): NewUserOnline.AsObject;
    static serializeBinaryToWriter(message: NewUserOnline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewUserOnline;
    static deserializeBinaryFromReader(message: NewUserOnline, reader: jspb.BinaryReader): NewUserOnline;
  }

  export namespace NewUserOnline {
    export type AsObject = {
      userid: string,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    CLIENT_MESSAGE = 2,
    USER_ONLINE = 3,
  }
}

