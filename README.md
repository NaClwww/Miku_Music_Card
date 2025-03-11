# Miku_music_card
## Introducing
通过访问一个链接随机返回一首歌单中的歌到网易云

采用react+nginx架设一个静态网页
## TODO
- [ ] 支持更多平台
- [ ] 更方便的架设
- [ ] ...
## How to use?
1. fork一份项目到自己的仓库
2. 修改`react/src/MusicId.txt`中的歌曲id为你歌单中的id(一般分享歌曲时后缀带的“id=<music id>”即为歌曲id)
3. 在修改之后会自动生成docker镜像，把该镜像传到云服务器上
4. 在镜像同级目录下输入`sudo docker load -i <镜像名称>`
5. 运行`sudo docker run -p <你要暴露的端口>:8880 miku_music_card:latest`
## Trouble shooting
如果内网能否访问外网访问不到，请留意是否允许应用穿过防火墙或安全组
