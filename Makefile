generate:
	mkdir -p gen && \
	mkdir -p gen/go && \
	\
	find proto -name "*.proto" -exec protoc -I proto {} \
		--go_out=./gen/go/ --go_opt=paths=source_relative \
		--go-grpc_out=./gen/go/ --go-grpc_opt=paths=source_relative \
		--experimental_allow_proto3_optional {} \;



