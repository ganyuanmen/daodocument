#  道易程前端api（daoapi）介绍
daoapi 是一个专门用于操作 dao 合约的框架， 封装了与智能合约交互的操作过程。让用户以函数的方式直接调用合约的功能。
::: tip 版本更新提示
请实时关注我们的GitHup,我们把版本更新及bug 更正都发布在GitHup上。
[道易程daoapi](https://github.com/ganyuanmen/daoapi).
:::

## 安装
```js
npm install daoapi@1.0.3

或

yarn add daoapi@1.0.3

```

daoapi 依赖 web3.js 和 jszip.js, 使用前需要安装依赖包

```js
npm install web3.js
npm install jszip
```

## 启动

 ```js
 import Web3 from "web3";
 import DaoApi from "daoapi"
 ```

使用web3 连接到以太坊服务器后， 执行：
```js
 let daoapi=new DaoApi(web3,selectedAccount) //selectedAccount 用户钱包地址

```

daoapi 默认的地址， 是Ropsten 的测试网络地址, 根据合约部署的环境， 可以更改合约地址，按模块更改：
```js
daoapi.iadd.setAddress('0x......');
daoapi.tokens.setAddress('0x......');
daoapi.utoken.setAddress('0x......');
......

```

