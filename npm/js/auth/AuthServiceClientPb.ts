/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: auth/auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_auth_pb from '../auth/auth_pb'; // proto import: "auth/auth.proto"


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLoginByEmail = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/LoginByEmail',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.LoginRequestByEmail,
    auth_auth_pb.LoginResponse,
    (request: auth_auth_pb.LoginRequestByEmail) => {
      return request.serializeBinary();
    },
    auth_auth_pb.LoginResponse.deserializeBinary
  );

  loginByEmail(
    request: auth_auth_pb.LoginRequestByEmail,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.LoginResponse>;

  loginByEmail(
    request: auth_auth_pb.LoginRequestByEmail,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.LoginResponse>;

  loginByEmail(
    request: auth_auth_pb.LoginRequestByEmail,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/LoginByEmail',
        request,
        metadata || {},
        this.methodDescriptorLoginByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/LoginByEmail',
    request,
    metadata || {},
    this.methodDescriptorLoginByEmail);
  }

  methodDescriptorLoginByUsername = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/LoginByUsername',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.LoginRequestByUsername,
    auth_auth_pb.LoginResponse,
    (request: auth_auth_pb.LoginRequestByUsername) => {
      return request.serializeBinary();
    },
    auth_auth_pb.LoginResponse.deserializeBinary
  );

  loginByUsername(
    request: auth_auth_pb.LoginRequestByUsername,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.LoginResponse>;

  loginByUsername(
    request: auth_auth_pb.LoginRequestByUsername,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.LoginResponse>;

  loginByUsername(
    request: auth_auth_pb.LoginRequestByUsername,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/LoginByUsername',
        request,
        metadata || {},
        this.methodDescriptorLoginByUsername,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/LoginByUsername',
    request,
    metadata || {},
    this.methodDescriptorLoginByUsername);
  }

  methodDescriptorCreateUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/CreateUser',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.CreateUserRequest,
    auth_auth_pb.CreateUserResponse,
    (request: auth_auth_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.CreateUserResponse.deserializeBinary
  );

  createUser(
    request: auth_auth_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.CreateUserResponse>;

  createUser(
    request: auth_auth_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.CreateUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.CreateUserResponse>;

  createUser(
    request: auth_auth_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.CreateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/CreateUser',
        request,
        metadata || {},
        this.methodDescriptorCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/CreateUser',
    request,
    metadata || {},
    this.methodDescriptorCreateUser);
  }

  methodDescriptorUpdateUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/UpdateUser',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.UpdateUserRequest,
    auth_auth_pb.UpdateUserResponse,
    (request: auth_auth_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.UpdateUserResponse.deserializeBinary
  );

  updateUser(
    request: auth_auth_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.UpdateUserResponse>;

  updateUser(
    request: auth_auth_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.UpdateUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.UpdateUserResponse>;

  updateUser(
    request: auth_auth_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.UpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/UpdateUser',
        request,
        metadata || {},
        this.methodDescriptorUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/UpdateUser',
    request,
    metadata || {},
    this.methodDescriptorUpdateUser);
  }

  methodDescriptorDeleteUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/DeleteUser',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.DeleteUserRequest,
    auth_auth_pb.DeleteUserResponse,
    (request: auth_auth_pb.DeleteUserRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.DeleteUserResponse.deserializeBinary
  );

  deleteUser(
    request: auth_auth_pb.DeleteUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.DeleteUserResponse>;

  deleteUser(
    request: auth_auth_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.DeleteUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.DeleteUserResponse>;

  deleteUser(
    request: auth_auth_pb.DeleteUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.DeleteUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/DeleteUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/DeleteUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteUser);
  }

  methodDescriptorGetUserByEmail = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/GetUserByEmail',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.GetUserByEmailRequest,
    auth_auth_pb.GetUserResponse,
    (request: auth_auth_pb.GetUserByEmailRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.GetUserResponse.deserializeBinary
  );

  getUserByEmail(
    request: auth_auth_pb.GetUserByEmailRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.GetUserResponse>;

  getUserByEmail(
    request: auth_auth_pb.GetUserByEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.GetUserResponse>;

  getUserByEmail(
    request: auth_auth_pb.GetUserByEmailRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/GetUserByEmail',
        request,
        metadata || {},
        this.methodDescriptorGetUserByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/GetUserByEmail',
    request,
    metadata || {},
    this.methodDescriptorGetUserByEmail);
  }

  methodDescriptorGetUserByUsername = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/GetUserByUsername',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.GetUserByUsernameRequest,
    auth_auth_pb.GetUserResponse,
    (request: auth_auth_pb.GetUserByUsernameRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.GetUserResponse.deserializeBinary
  );

  getUserByUsername(
    request: auth_auth_pb.GetUserByUsernameRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.GetUserResponse>;

  getUserByUsername(
    request: auth_auth_pb.GetUserByUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.GetUserResponse>;

  getUserByUsername(
    request: auth_auth_pb.GetUserByUsernameRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/GetUserByUsername',
        request,
        metadata || {},
        this.methodDescriptorGetUserByUsername,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/GetUserByUsername',
    request,
    metadata || {},
    this.methodDescriptorGetUserByUsername);
  }

  methodDescriptorGetUserByToken = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/GetUserByToken',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.GetUserByTokenRequest,
    auth_auth_pb.GetUserResponse,
    (request: auth_auth_pb.GetUserByTokenRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.GetUserResponse.deserializeBinary
  );

  getUserByToken(
    request: auth_auth_pb.GetUserByTokenRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.GetUserResponse>;

  getUserByToken(
    request: auth_auth_pb.GetUserByTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.GetUserResponse>;

  getUserByToken(
    request: auth_auth_pb.GetUserByTokenRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/GetUserByToken',
        request,
        metadata || {},
        this.methodDescriptorGetUserByToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/GetUserByToken',
    request,
    metadata || {},
    this.methodDescriptorGetUserByToken);
  }

  methodDescriptorGetUserByID = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/GetUserByID',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.GetUserByIDRequest,
    auth_auth_pb.GetUserResponse,
    (request: auth_auth_pb.GetUserByIDRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.GetUserResponse.deserializeBinary
  );

  getUserByID(
    request: auth_auth_pb.GetUserByIDRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.GetUserResponse>;

  getUserByID(
    request: auth_auth_pb.GetUserByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.GetUserResponse>;

  getUserByID(
    request: auth_auth_pb.GetUserByIDRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/GetUserByID',
        request,
        metadata || {},
        this.methodDescriptorGetUserByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/GetUserByID',
    request,
    metadata || {},
    this.methodDescriptorGetUserByID);
  }

  methodDescriptorVerifyUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/VerifyUser',
    grpcWeb.MethodType.UNARY,
    auth_auth_pb.VerifyUserRequest,
    auth_auth_pb.VerifyUserResponse,
    (request: auth_auth_pb.VerifyUserRequest) => {
      return request.serializeBinary();
    },
    auth_auth_pb.VerifyUserResponse.deserializeBinary
  );

  verifyUser(
    request: auth_auth_pb.VerifyUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_auth_pb.VerifyUserResponse>;

  verifyUser(
    request: auth_auth_pb.VerifyUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_auth_pb.VerifyUserResponse) => void): grpcWeb.ClientReadableStream<auth_auth_pb.VerifyUserResponse>;

  verifyUser(
    request: auth_auth_pb.VerifyUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_auth_pb.VerifyUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/VerifyUser',
        request,
        metadata || {},
        this.methodDescriptorVerifyUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/VerifyUser',
    request,
    metadata || {},
    this.methodDescriptorVerifyUser);
  }

}

