/**
 * @fileoverview gRPC-Web generated client stub for rooms
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: rooms/rooms.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as rooms_rooms_pb from '../rooms/rooms_pb'; // proto import: "rooms/rooms.proto"


export class RoomServiceClient {
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

  methodDescriptorCreateRoom = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/CreateRoom',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.CreateRoomRequest,
    rooms_rooms_pb.CreateRoomResponse,
    (request: rooms_rooms_pb.CreateRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.CreateRoomResponse.deserializeBinary
  );

  createRoom(
    request: rooms_rooms_pb.CreateRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.CreateRoomResponse>;

  createRoom(
    request: rooms_rooms_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.CreateRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.CreateRoomResponse>;

  createRoom(
    request: rooms_rooms_pb.CreateRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.CreateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/CreateRoom',
        request,
        metadata || {},
        this.methodDescriptorCreateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/CreateRoom',
    request,
    metadata || {},
    this.methodDescriptorCreateRoom);
  }

  methodDescriptorGetRoom = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/GetRoom',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.GetRoomRequest,
    rooms_rooms_pb.GetRoomResponse,
    (request: rooms_rooms_pb.GetRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.GetRoomResponse.deserializeBinary
  );

  getRoom(
    request: rooms_rooms_pb.GetRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.GetRoomResponse>;

  getRoom(
    request: rooms_rooms_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.GetRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.GetRoomResponse>;

  getRoom(
    request: rooms_rooms_pb.GetRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.GetRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/GetRoom',
        request,
        metadata || {},
        this.methodDescriptorGetRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/GetRoom',
    request,
    metadata || {},
    this.methodDescriptorGetRoom);
  }

  methodDescriptorUpdateRoom = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/UpdateRoom',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.UpdateRoomRequest,
    rooms_rooms_pb.UpdateRoomResponse,
    (request: rooms_rooms_pb.UpdateRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.UpdateRoomResponse.deserializeBinary
  );

  updateRoom(
    request: rooms_rooms_pb.UpdateRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.UpdateRoomResponse>;

  updateRoom(
    request: rooms_rooms_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.UpdateRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.UpdateRoomResponse>;

  updateRoom(
    request: rooms_rooms_pb.UpdateRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.UpdateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/UpdateRoom',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/UpdateRoom',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoom);
  }

  methodDescriptorDeleteRoom = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/DeleteRoom',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.DeleteRoomRequest,
    rooms_rooms_pb.DeleteRoomResponse,
    (request: rooms_rooms_pb.DeleteRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.DeleteRoomResponse.deserializeBinary
  );

  deleteRoom(
    request: rooms_rooms_pb.DeleteRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.DeleteRoomResponse>;

  deleteRoom(
    request: rooms_rooms_pb.DeleteRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.DeleteRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.DeleteRoomResponse>;

  deleteRoom(
    request: rooms_rooms_pb.DeleteRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.DeleteRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/DeleteRoom',
        request,
        metadata || {},
        this.methodDescriptorDeleteRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/DeleteRoom',
    request,
    metadata || {},
    this.methodDescriptorDeleteRoom);
  }

  methodDescriptorGetRoomsByUser = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/GetRoomsByUser',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.GetRoomsByUserRequest,
    rooms_rooms_pb.GetRoomsByUserResponse,
    (request: rooms_rooms_pb.GetRoomsByUserRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.GetRoomsByUserResponse.deserializeBinary
  );

  getRoomsByUser(
    request: rooms_rooms_pb.GetRoomsByUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.GetRoomsByUserResponse>;

  getRoomsByUser(
    request: rooms_rooms_pb.GetRoomsByUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.GetRoomsByUserResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.GetRoomsByUserResponse>;

  getRoomsByUser(
    request: rooms_rooms_pb.GetRoomsByUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.GetRoomsByUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/GetRoomsByUser',
        request,
        metadata || {},
        this.methodDescriptorGetRoomsByUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/GetRoomsByUser',
    request,
    metadata || {},
    this.methodDescriptorGetRoomsByUser);
  }

  methodDescriptorAddToRoom = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/AddToRoom',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.AddToRoomRequest,
    rooms_rooms_pb.AddToRoomResponse,
    (request: rooms_rooms_pb.AddToRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.AddToRoomResponse.deserializeBinary
  );

  addToRoom(
    request: rooms_rooms_pb.AddToRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.AddToRoomResponse>;

  addToRoom(
    request: rooms_rooms_pb.AddToRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.AddToRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.AddToRoomResponse>;

  addToRoom(
    request: rooms_rooms_pb.AddToRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.AddToRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/AddToRoom',
        request,
        metadata || {},
        this.methodDescriptorAddToRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/AddToRoom',
    request,
    metadata || {},
    this.methodDescriptorAddToRoom);
  }

  methodDescriptorDeleteFromRoom = new grpcWeb.MethodDescriptor(
    '/rooms.RoomService/DeleteFromRoom',
    grpcWeb.MethodType.UNARY,
    rooms_rooms_pb.AddToRoomRequest,
    rooms_rooms_pb.AddToRoomResponse,
    (request: rooms_rooms_pb.AddToRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_rooms_pb.AddToRoomResponse.deserializeBinary
  );

  deleteFromRoom(
    request: rooms_rooms_pb.AddToRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<rooms_rooms_pb.AddToRoomResponse>;

  deleteFromRoom(
    request: rooms_rooms_pb.AddToRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.AddToRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_rooms_pb.AddToRoomResponse>;

  deleteFromRoom(
    request: rooms_rooms_pb.AddToRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_rooms_pb.AddToRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.RoomService/DeleteFromRoom',
        request,
        metadata || {},
        this.methodDescriptorDeleteFromRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.RoomService/DeleteFromRoom',
    request,
    metadata || {},
    this.methodDescriptorDeleteFromRoom);
  }

}

