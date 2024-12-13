# 使用更小的基础镜像
FROM alpine:3.19

# 安装基本依赖
RUN apk add --no-cache ca-certificates

WORKDIR /app

# 复制必要文件
COPY server .
COPY build/ ./build/
COPY config.yaml .
COPY MusicId.txt .

# 设置可执行权限
RUN chmod +x server

# 暴露端口
EXPOSE 8880

# 启动命令
CMD ["./server"] 