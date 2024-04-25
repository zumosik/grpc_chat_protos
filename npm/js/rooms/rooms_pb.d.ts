import * as jspb from 'google-protobuf'



export class Room extends jspb.Message {
  getId(): string;
  setId(value: string): Room;

  getName(): string;
  setName(value: string): Room;

  getUsersList(): Array<PublicUser>;
  setUsersList(value: Array<PublicUser>): Room;
  clearUsersList(): Room;
  addUsers(value?: PublicUser, index?: number): PublicUser;

  getCreatedBy(): PublicUser | undefined;
  setCreatedBy(value?: PublicUser): Room;
  hasCreatedBy(): boolean;
  clearCreatedBy(): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    id: string,
    name: string,
    usersList: Array<PublicUser.AsObject>,
    createdBy?: PublicUser.AsObject,
  }
}

export class PrivateRoom extends jspb.Message {
  getId(): string;
  setId(value: string): PrivateRoom;

  getName(): string;
  setName(value: string): PrivateRoom;

  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): PrivateRoom;
  clearUsersList(): PrivateRoom;
  addUsers(value?: User, index?: number): User;

  getCreatedBy(): User | undefined;
  setCreatedBy(value?: User): PrivateRoom;
  hasCreatedBy(): boolean;
  clearCreatedBy(): PrivateRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateRoom.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateRoom): PrivateRoom.AsObject;
  static serializeBinaryToWriter(message: PrivateRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateRoom;
  static deserializeBinaryFromReader(message: PrivateRoom, reader: jspb.BinaryReader): PrivateRoom;
}

export namespace PrivateRoom {
  export type AsObject = {
    id: string,
    name: string,
    usersList: Array<User.AsObject>,
    createdBy?: User.AsObject,
  }
}

export class PublicUser extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): PublicUser;

  getEmail(): string;
  setEmail(value: string): PublicUser;

  getVerified(): boolean;
  setVerified(value: boolean): PublicUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicUser.AsObject;
  static toObject(includeInstance: boolean, msg: PublicUser): PublicUser.AsObject;
  static serializeBinaryToWriter(message: PublicUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicUser;
  static deserializeBinaryFromReader(message: PublicUser, reader: jspb.BinaryReader): PublicUser;
}

export namespace PublicUser {
  export type AsObject = {
    username: string,
    email: string,
    verified: boolean,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getUsername(): string;
  setUsername(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getVerified(): boolean;
  setVerified(value: boolean): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    username: string,
    email: string,
    verified: boolean,
  }
}

export class PrivateGetRoomsByUserIDRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): PrivateGetRoomsByUserIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateGetRoomsByUserIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateGetRoomsByUserIDRequest): PrivateGetRoomsByUserIDRequest.AsObject;
  static serializeBinaryToWriter(message: PrivateGetRoomsByUserIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateGetRoomsByUserIDRequest;
  static deserializeBinaryFromReader(message: PrivateGetRoomsByUserIDRequest, reader: jspb.BinaryReader): PrivateGetRoomsByUserIDRequest;
}

export namespace PrivateGetRoomsByUserIDRequest {
  export type AsObject = {
    userId: string,
  }
}

export class PrivateGetRoomsByUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): PrivateGetRoomsByUserResponse;

  getRoomsList(): Array<PrivateRoom>;
  setRoomsList(value: Array<PrivateRoom>): PrivateGetRoomsByUserResponse;
  clearRoomsList(): PrivateGetRoomsByUserResponse;
  addRooms(value?: PrivateRoom, index?: number): PrivateRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateGetRoomsByUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateGetRoomsByUserResponse): PrivateGetRoomsByUserResponse.AsObject;
  static serializeBinaryToWriter(message: PrivateGetRoomsByUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateGetRoomsByUserResponse;
  static deserializeBinaryFromReader(message: PrivateGetRoomsByUserResponse, reader: jspb.BinaryReader): PrivateGetRoomsByUserResponse;
}

export namespace PrivateGetRoomsByUserResponse {
  export type AsObject = {
    success: boolean,
    roomsList: Array<PrivateRoom.AsObject>,
  }
}

export class GetRoomsByUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsByUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsByUserRequest): GetRoomsByUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomsByUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsByUserRequest;
  static deserializeBinaryFromReader(message: GetRoomsByUserRequest, reader: jspb.BinaryReader): GetRoomsByUserRequest;
}

export namespace GetRoomsByUserRequest {
  export type AsObject = {
  }
}

export class GetRoomsByUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetRoomsByUserResponse;

  getRoomsList(): Array<Room>;
  setRoomsList(value: Array<Room>): GetRoomsByUserResponse;
  clearRoomsList(): GetRoomsByUserResponse;
  addRooms(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsByUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsByUserResponse): GetRoomsByUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomsByUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsByUserResponse;
  static deserializeBinaryFromReader(message: GetRoomsByUserResponse, reader: jspb.BinaryReader): GetRoomsByUserResponse;
}

export namespace GetRoomsByUserResponse {
  export type AsObject = {
    success: boolean,
    roomsList: Array<Room.AsObject>,
  }
}

export class AddToRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): AddToRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToRoomRequest): AddToRoomRequest.AsObject;
  static serializeBinaryToWriter(message: AddToRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToRoomRequest;
  static deserializeBinaryFromReader(message: AddToRoomRequest, reader: jspb.BinaryReader): AddToRoomRequest;
}

export namespace AddToRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class AddToRoomResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AddToRoomResponse;

  getRoom(): Room | undefined;
  setRoom(value?: Room): AddToRoomResponse;
  hasRoom(): boolean;
  clearRoom(): AddToRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddToRoomResponse): AddToRoomResponse.AsObject;
  static serializeBinaryToWriter(message: AddToRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToRoomResponse;
  static deserializeBinaryFromReader(message: AddToRoomResponse, reader: jspb.BinaryReader): AddToRoomResponse;
}

export namespace AddToRoomResponse {
  export type AsObject = {
    success: boolean,
    room?: Room.AsObject,
  }
}

export class CreateRoomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateRoomResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CreateRoomResponse;

  getRoom(): Room | undefined;
  setRoom(value?: Room): CreateRoomResponse;
  hasRoom(): boolean;
  clearRoom(): CreateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomResponse): CreateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomResponse;
  static deserializeBinaryFromReader(message: CreateRoomResponse, reader: jspb.BinaryReader): CreateRoomResponse;
}

export namespace CreateRoomResponse {
  export type AsObject = {
    success: boolean,
    room?: Room.AsObject,
  }
}

export class GetRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetRoomResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetRoomResponse;

  getRoom(): Room | undefined;
  setRoom(value?: Room): GetRoomResponse;
  hasRoom(): boolean;
  clearRoom(): GetRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomResponse): GetRoomResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomResponse;
  static deserializeBinaryFromReader(message: GetRoomResponse, reader: jspb.BinaryReader): GetRoomResponse;
}

export namespace GetRoomResponse {
  export type AsObject = {
    success: boolean,
    room?: Room.AsObject,
  }
}

export class UpdateRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): UpdateRoomRequest;

  getName(): string;
  setName(value: string): UpdateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomRequest): UpdateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomRequest;
  static deserializeBinaryFromReader(message: UpdateRoomRequest, reader: jspb.BinaryReader): UpdateRoomRequest;
}

export namespace UpdateRoomRequest {
  export type AsObject = {
    roomId: string,
    name: string,
  }
}

export class UpdateRoomResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateRoomResponse;

  getRoom(): Room | undefined;
  setRoom(value?: Room): UpdateRoomResponse;
  hasRoom(): boolean;
  clearRoom(): UpdateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomResponse): UpdateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomResponse;
  static deserializeBinaryFromReader(message: UpdateRoomResponse, reader: jspb.BinaryReader): UpdateRoomResponse;
}

export namespace UpdateRoomResponse {
  export type AsObject = {
    success: boolean,
    room?: Room.AsObject,
  }
}

export class DeleteRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): DeleteRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomRequest): DeleteRoomRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomRequest;
  static deserializeBinaryFromReader(message: DeleteRoomRequest, reader: jspb.BinaryReader): DeleteRoomRequest;
}

export namespace DeleteRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class DeleteRoomResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteRoomResponse;

  getRoomId(): string;
  setRoomId(value: string): DeleteRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomResponse): DeleteRoomResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomResponse;
  static deserializeBinaryFromReader(message: DeleteRoomResponse, reader: jspb.BinaryReader): DeleteRoomResponse;
}

export namespace DeleteRoomResponse {
  export type AsObject = {
    success: boolean,
    roomId: string,
  }
}

