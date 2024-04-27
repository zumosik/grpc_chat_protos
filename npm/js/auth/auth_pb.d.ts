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

export class LoginRequestByEmail extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequestByEmail;

  getPassword(): string;
  setPassword(value: string): LoginRequestByEmail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequestByEmail.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequestByEmail): LoginRequestByEmail.AsObject;
  static serializeBinaryToWriter(message: LoginRequestByEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequestByEmail;
  static deserializeBinaryFromReader(message: LoginRequestByEmail, reader: jspb.BinaryReader): LoginRequestByEmail;
}

export namespace LoginRequestByEmail {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginRequestByUsername extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequestByUsername;

  getPassword(): string;
  setPassword(value: string): LoginRequestByUsername;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequestByUsername.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequestByUsername): LoginRequestByUsername.AsObject;
  static serializeBinaryToWriter(message: LoginRequestByUsername, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequestByUsername;
  static deserializeBinaryFromReader(message: LoginRequestByUsername, reader: jspb.BinaryReader): LoginRequestByUsername;
}

export namespace LoginRequestByUsername {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class GetUserByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByIDRequest): GetUserByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByIDRequest;
  static deserializeBinaryFromReader(message: GetUserByIDRequest, reader: jspb.BinaryReader): GetUserByIDRequest;
}

export namespace GetUserByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserByTokenRequest extends jspb.Message {
  getToken(): Token | undefined;
  setToken(value?: Token): GetUserByTokenRequest;
  hasToken(): boolean;
  clearToken(): GetUserByTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByTokenRequest): GetUserByTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByTokenRequest;
  static deserializeBinaryFromReader(message: GetUserByTokenRequest, reader: jspb.BinaryReader): GetUserByTokenRequest;
}

export namespace GetUserByTokenRequest {
  export type AsObject = {
    token?: Token.AsObject,
  }
}

export class GetUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetUserResponse;

  getUser(): User | undefined;
  setUser(value?: User): GetUserResponse;
  hasUser(): boolean;
  clearUser(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
  }
}

export class VerifyUserRequest extends jspb.Message {
  getVerificationCode(): string;
  setVerificationCode(value: string): VerifyUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyUserRequest): VerifyUserRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyUserRequest;
  static deserializeBinaryFromReader(message: VerifyUserRequest, reader: jspb.BinaryReader): VerifyUserRequest;
}

export namespace VerifyUserRequest {
  export type AsObject = {
    verificationCode: string,
  }
}

export class VerifyUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyUserResponse;

  getUser(): User | undefined;
  setUser(value?: User): VerifyUserResponse;
  hasUser(): boolean;
  clearUser(): VerifyUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyUserResponse): VerifyUserResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyUserResponse;
  static deserializeBinaryFromReader(message: VerifyUserResponse, reader: jspb.BinaryReader): VerifyUserResponse;
}

export namespace VerifyUserResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
  }
}

export class GetUserByUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): GetUserByUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByUsernameRequest): GetUserByUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByUsernameRequest;
  static deserializeBinaryFromReader(message: GetUserByUsernameRequest, reader: jspb.BinaryReader): GetUserByUsernameRequest;
}

export namespace GetUserByUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class GetUserByEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GetUserByEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByEmailRequest): GetUserByEmailRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByEmailRequest;
  static deserializeBinaryFromReader(message: GetUserByEmailRequest, reader: jspb.BinaryReader): GetUserByEmailRequest;
}

export namespace GetUserByEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class LoginResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LoginResponse;

  getToken(): Token | undefined;
  setToken(value?: Token): LoginResponse;
  hasToken(): boolean;
  clearToken(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    success: boolean,
    token?: Token.AsObject,
  }
}

export class CreateUserRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateUserRequest;

  getPassword(): string;
  setPassword(value: string): CreateUserRequest;

  getEmail(): string;
  setEmail(value: string): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    username: string,
    password: string,
    email: string,
  }
}

export class CreateUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CreateUserResponse;

  getUser(): User | undefined;
  setUser(value?: User): CreateUserResponse;
  hasUser(): boolean;
  clearUser(): CreateUserResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): CreateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
    verificationCode: string,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getToken(): Token | undefined;
  setToken(value?: Token): UpdateUserRequest;
  hasToken(): boolean;
  clearToken(): UpdateUserRequest;

  getUsername(): string;
  setUsername(value: string): UpdateUserRequest;

  getPassword(): string;
  setPassword(value: string): UpdateUserRequest;

  getEmail(): string;
  setEmail(value: string): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    token?: Token.AsObject,
    username: string,
    password: string,
    email: string,
  }
}

export class UpdateUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateUserResponse;

  getNewUser(): User | undefined;
  setNewUser(value?: User): UpdateUserResponse;
  hasNewUser(): boolean;
  clearNewUser(): UpdateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    success: boolean,
    newUser?: User.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getToken(): Token | undefined;
  setToken(value?: Token): DeleteUserRequest;
  hasToken(): boolean;
  clearToken(): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    token?: Token.AsObject,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    success: boolean,
  }
}

