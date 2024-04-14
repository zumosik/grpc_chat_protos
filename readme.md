# Chat prortos
> GRPC proto files for [this project](https://github.com/zumosik/chat_grpc)

## Installation

Follow these steps to install the necessary tools to run the Makefile:

1. **Install GNU Make**: This is the tool that interprets the Makefile and runs the commands. On a Linux machine, you can install it using the package manager. For example, on Ubuntu, you can use the following command in your terminal:
  ```bash
  sudo apt-get install make
  ```

2. **Install Protobuf Compiler (protoc)**: This is used to generate code from `.proto` files. You can download pre-compiled binaries from the [protobuf GitHub releases page](https://github.com/protocolbuffers/protobuf/releases).

3. **Install Go**: The Go programming language is needed to run the Go plugin for Protobuf. You can download it from the [official Go website](https://golang.org/dl/).

4. **Install Node.js and npm**: These are needed to run the JavaScript and gRPC-Web plugins for Protobuf. You can download Node.js, which includes npm, from the [official Node.js website](https://nodejs.org/en/download/).

5. **Install Go support for Protobuf**: This is a plugin for the Protobuf compiler that generates Go code. You can install it with the following commands in your terminal:
  ```bash
  go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
  go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

  # update your path if you havent
  export PATH="$PATH:$(go env GOPATH)/bin"
  ```

  [More about protoc for Go here](https://grpc.io/docs/languages/go/quickstart/)

6. **Install JavaScript and gRPC-Web support for Protobuf**: These are plugins for the Protobuf compiler that generate JavaScript and gRPC-Web code. You can install them following the instructions on the [gRPC-Web GitHub page](https://github.com/grpc/grpc-web).

## How to generate file?
- for npm generation run 
```sh
make npm
 ```
- for go generation run 
```sh
make go
```
- for generation of all files run 
```sh
make
```