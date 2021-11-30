# 网站部署

## 一、docker 部署
网站采用两个docker 容器部署， 一个是mysql 容器， 另一个是java 容器。mysql容器是用于主链数据的缓存，java 容器提供网站支侍。
### 下载docker镜像
```js
 docker pull fhtcgym123/dao_mysql
 docker pull fhtcgym123/dao_server

```

### 安装部署
```js
docker run -itd --name dao_mysql  -v /mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Dao..123 dao_mysql
docker run -itd -p 8086:8088 --name daoserver --link dao_mysql:dao_mysql  dao_server

```
- mysql 数据库需要挂载在宿主机上，可以永久保存缓存数据。 -v /mysql/data:/var/lib/mysql 表示数据挂载在宿主机的 /mysql/data 目录下，可以根据实际更改挂载目录。
- -e MYSQL_ROOT_PASSWORD=Dao..123 表示mysql root用户的密码是 Dao..123，不能更改，否则网站将连接不上数据库。这里的mysql 是运行在容器中， 不提供对外接口，只有用 --link参数 运行的容器才能访问，因此不存在数据安全问题。
-  --link dao_mysql:dao_mysql 是必须的， 表示网站的数据由dao_mysql容器提供。
-  -p 8086:8088 表示容器的接口映射到宿主机的端口上。 容器的8088端口提供网站的访问， 宿主机可以根据实际映射该端口。

### mysql Dockerfile
```html

FROM docker.io/mysql

#指明该镜像的作者和电子邮箱
MAINTAINER gym "393909065@qq.com"
 
EXPOSE 3306

#定义会被容器自动执行的目录
ENV AUTO_RUN_DIR /docker-entrypoint-initdb.d

#定义初始化sql文件
ENV INIT_SQL admin.sql

#把要执行的sql文件放到/docker-entrypoint-initdb.d/目录下，容器会自动执行这个sql
COPY admin.sql ./$INIT_SQL $AUTO_RUN_DIR/

#给执行文件增加可执行权限
RUN chmod a+x $AUTO_RUN_DIR/$INIT_SQL

```
### java 网站 Dockerfile
```html

FROM docker.io/java:8

#指明该镜像的作者和电子邮箱
MAINTAINER gym "393909065@qq.com"
 
#在构建镜像时，指定镜像的工作目录，之后的命令都是基于此工作目录，如果不存在，则会创建目录
WORKDIR /home
 
COPY daoserver-0.1.jar  /home

EXPOSE 8088

RUN chmod a+x /home/daoserver-0.1.jar

ENTRYPOINT ["java", "-jar","/home/daoserver-0.1.jar"]

```
## 二、拆分部署

### 1、mysql 数据库的安装
下载 mysql 脚本文件，登录后，运行 source /admin.sql
附件: admin.sql https://uploader.shimo.im/f/cgN3S61KX2B4QPJR.sql?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2MzgyNzAyMzEsImciOiJRNktrSjlEeWN0Nkt2V2d3IiwiaWF0IjoxNjM4MjY5OTMxLCJ1c2VySWQiOjcxMDYxOTk1fQ.zMJReydTk-wB9WneN_DNjkBEhha_qg-_VdSer-Iqad0

### 2、dao的后台服务部署
 从git hub 下载 dao 服务（springboot）项目，在配置文件中更改mysql的登录地址、帐号和密码。编译成jar 包发布到linux 服务器， 或编译成war包发布到 tomcat下。

### 3、dao的事件监听服务部署
 从git hub 下载 dao事件服务(nodejs)项目，在配置文件sn.txt 中更改mysql的登录地址、帐号和密码。包发布到linux 服务器。

### 4、dao网站部署
 从git hub 下载 dao网站项目(webpack), 打包后，发布到nginx 或httpd 下。
