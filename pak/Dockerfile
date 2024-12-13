FROM golang:1.21-alpine

WORKDIR /app

# 设置GOPROXY加速依赖下载
ENV GOPROXY=https://goproxy.cn,direct
ENV GO111MODULE=on

# 复制Go源码和必要文件
COPY main.go .
COPY go.mod .
COPY go.sum .
COPY config.yaml .
COPY MusicId.txt .
COPY build/ build/

# 安装必要的编译工具和依赖
RUN apk add --no-cache gcc musl-dev git

# 修改go.mod中的版本
RUN sed -i 's/go 1.23/go 1.21/g' go.mod

# 下载依赖
RUN go mod download

# 编译服务器
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o server

# 添加执行权限
RUN chmod +x server

EXPOSE 8880

CMD ["./server"] 