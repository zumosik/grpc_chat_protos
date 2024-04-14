all: generate_go generate_npm

generate_go:
	mkdir -p go && \
	\
	find proto -name "*.proto" -exec protoc -I proto {} \
		--go_out=./go/ --go_opt=paths=source_relative \
		--go-grpc_out=./go/ --go-grpc_opt=paths=source_relative \;


generate_npm:
	mkdir -p npm/js && \
	\
	find proto -name "*.proto" -exec protoc -I proto {} \
		--js_out=import_style=commonjs,binary:./npm/js \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./npm/js \
		--plugin=protoc-gen-ts=./npm/node_modules/.bin/protoc-gen-ts \;
