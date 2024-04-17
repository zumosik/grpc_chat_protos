import * as jspb from 'google-protobuf'



export class NotificationRequest extends jspb.Message {
  getConfirmEmail(): NotificationRequest.ConfirmEmail | undefined;
  setConfirmEmail(value?: NotificationRequest.ConfirmEmail): NotificationRequest;
  hasConfirmEmail(): boolean;
  clearConfirmEmail(): NotificationRequest;

  getNotificationCase(): NotificationRequest.NotificationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationRequest): NotificationRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationRequest;
  static deserializeBinaryFromReader(message: NotificationRequest, reader: jspb.BinaryReader): NotificationRequest;
}

export namespace NotificationRequest {
  export type AsObject = {
    confirmEmail?: NotificationRequest.ConfirmEmail.AsObject,
  }

  export class ConfirmEmail extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): ConfirmEmail;

    getVerificationCode(): string;
    setVerificationCode(value: string): ConfirmEmail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfirmEmail.AsObject;
    static toObject(includeInstance: boolean, msg: ConfirmEmail): ConfirmEmail.AsObject;
    static serializeBinaryToWriter(message: ConfirmEmail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfirmEmail;
    static deserializeBinaryFromReader(message: ConfirmEmail, reader: jspb.BinaryReader): ConfirmEmail;
  }

  export namespace ConfirmEmail {
    export type AsObject = {
      email: string,
      verificationCode: string,
    }
  }


  export enum NotificationCase { 
    NOTIFICATION_NOT_SET = 0,
    CONFIRM_EMAIL = 1,
  }
}

export class NotificationResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): NotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationResponse): NotificationResponse.AsObject;
  static serializeBinaryToWriter(message: NotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationResponse;
  static deserializeBinaryFromReader(message: NotificationResponse, reader: jspb.BinaryReader): NotificationResponse;
}

export namespace NotificationResponse {
  export type AsObject = {
    status: string,
  }
}

