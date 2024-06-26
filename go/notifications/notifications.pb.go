// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.12.4
// source: notifications/notifications.proto

package notifications

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NotificationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Notification:
	//
	//	*NotificationRequest_ConfirmEmail_
	Notification isNotificationRequest_Notification `protobuf_oneof:"notification"`
}

func (x *NotificationRequest) Reset() {
	*x = NotificationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_notifications_notifications_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NotificationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NotificationRequest) ProtoMessage() {}

func (x *NotificationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_notifications_notifications_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NotificationRequest.ProtoReflect.Descriptor instead.
func (*NotificationRequest) Descriptor() ([]byte, []int) {
	return file_notifications_notifications_proto_rawDescGZIP(), []int{0}
}

func (m *NotificationRequest) GetNotification() isNotificationRequest_Notification {
	if m != nil {
		return m.Notification
	}
	return nil
}

func (x *NotificationRequest) GetConfirmEmail() *NotificationRequest_ConfirmEmail {
	if x, ok := x.GetNotification().(*NotificationRequest_ConfirmEmail_); ok {
		return x.ConfirmEmail
	}
	return nil
}

type isNotificationRequest_Notification interface {
	isNotificationRequest_Notification()
}

type NotificationRequest_ConfirmEmail_ struct {
	ConfirmEmail *NotificationRequest_ConfirmEmail `protobuf:"bytes,1,opt,name=confirm_email,json=confirmEmail,proto3,oneof"` // TODO
}

func (*NotificationRequest_ConfirmEmail_) isNotificationRequest_Notification() {}

type NotificationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status string `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *NotificationResponse) Reset() {
	*x = NotificationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_notifications_notifications_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NotificationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NotificationResponse) ProtoMessage() {}

func (x *NotificationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_notifications_notifications_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NotificationResponse.ProtoReflect.Descriptor instead.
func (*NotificationResponse) Descriptor() ([]byte, []int) {
	return file_notifications_notifications_proto_rawDescGZIP(), []int{1}
}

func (x *NotificationResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type NotificationRequest_ConfirmEmail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Email            string `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	VerificationCode string `protobuf:"bytes,2,opt,name=verification_code,json=verificationCode,proto3" json:"verification_code,omitempty"`
}

func (x *NotificationRequest_ConfirmEmail) Reset() {
	*x = NotificationRequest_ConfirmEmail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_notifications_notifications_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NotificationRequest_ConfirmEmail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NotificationRequest_ConfirmEmail) ProtoMessage() {}

func (x *NotificationRequest_ConfirmEmail) ProtoReflect() protoreflect.Message {
	mi := &file_notifications_notifications_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NotificationRequest_ConfirmEmail.ProtoReflect.Descriptor instead.
func (*NotificationRequest_ConfirmEmail) Descriptor() ([]byte, []int) {
	return file_notifications_notifications_proto_rawDescGZIP(), []int{0, 0}
}

func (x *NotificationRequest_ConfirmEmail) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *NotificationRequest_ConfirmEmail) GetVerificationCode() string {
	if x != nil {
		return x.VerificationCode
	}
	return ""
}

var File_notifications_notifications_proto protoreflect.FileDescriptor

var file_notifications_notifications_proto_rawDesc = []byte{
	0x0a, 0x21, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x22, 0xd0, 0x01, 0x0a, 0x13, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x56, 0x0a, 0x0d, 0x63, 0x6f,
	0x6e, 0x66, 0x69, 0x72, 0x6d, 0x5f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x2f, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x45, 0x6d, 0x61,
	0x69, 0x6c, 0x48, 0x00, 0x52, 0x0c, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x45, 0x6d, 0x61,
	0x69, 0x6c, 0x1a, 0x51, 0x0a, 0x0c, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x45, 0x6d, 0x61,
	0x69, 0x6c, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x2b, 0x0a, 0x11, 0x76, 0x65, 0x72, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x10, 0x76, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x43, 0x6f, 0x64, 0x65, 0x42, 0x0e, 0x0a, 0x0c, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x2e, 0x0a, 0x14, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x32, 0x74, 0x0a, 0x13, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5d, 0x0a, 0x10,
	0x53, 0x65, 0x6e, 0x64, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x22, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x10, 0x5a, 0x0e, 0x6e,
	0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_notifications_notifications_proto_rawDescOnce sync.Once
	file_notifications_notifications_proto_rawDescData = file_notifications_notifications_proto_rawDesc
)

func file_notifications_notifications_proto_rawDescGZIP() []byte {
	file_notifications_notifications_proto_rawDescOnce.Do(func() {
		file_notifications_notifications_proto_rawDescData = protoimpl.X.CompressGZIP(file_notifications_notifications_proto_rawDescData)
	})
	return file_notifications_notifications_proto_rawDescData
}

var file_notifications_notifications_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_notifications_notifications_proto_goTypes = []interface{}{
	(*NotificationRequest)(nil),              // 0: notifications.NotificationRequest
	(*NotificationResponse)(nil),             // 1: notifications.NotificationResponse
	(*NotificationRequest_ConfirmEmail)(nil), // 2: notifications.NotificationRequest.ConfirmEmail
}
var file_notifications_notifications_proto_depIdxs = []int32{
	2, // 0: notifications.NotificationRequest.confirm_email:type_name -> notifications.NotificationRequest.ConfirmEmail
	0, // 1: notifications.NotificationService.SendNotification:input_type -> notifications.NotificationRequest
	1, // 2: notifications.NotificationService.SendNotification:output_type -> notifications.NotificationResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_notifications_notifications_proto_init() }
func file_notifications_notifications_proto_init() {
	if File_notifications_notifications_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_notifications_notifications_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NotificationRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_notifications_notifications_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NotificationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_notifications_notifications_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NotificationRequest_ConfirmEmail); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_notifications_notifications_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*NotificationRequest_ConfirmEmail_)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_notifications_notifications_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_notifications_notifications_proto_goTypes,
		DependencyIndexes: file_notifications_notifications_proto_depIdxs,
		MessageInfos:      file_notifications_notifications_proto_msgTypes,
	}.Build()
	File_notifications_notifications_proto = out.File
	file_notifications_notifications_proto_rawDesc = nil
	file_notifications_notifications_proto_goTypes = nil
	file_notifications_notifications_proto_depIdxs = nil
}
