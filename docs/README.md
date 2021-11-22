#  道易程前端api（daoapi）介绍
daoapi 是一个专门用于操作 dao 合约的框架， 封装了与智能合约交互的操作过程。让用户以函数的方式直接调用合约的功能。

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
## 示例
```js
import Web3 from "web3";
import Web3Modal from "web3modal";
import DaoApi from "daoapi"
import WalletConnectProvider from "@walletconnect/web3-provider";

var web3,selectAcouunt;

//连接钱包
async function connect() {
  const providerOptions = {
      walletconnect: {
          package: WalletConnectProvider,
          options: {
              infuraId: "9676a35d629d488fb90d7eac1348c838"
          }
      }
  };

  const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      disableInjectedProvider: false
  });

  const provider = await web3Modal.connect();
  return provider;
}


function onConnect() {

  const daoapi = new DaoApi(web3, selectAcouunt);
  //默认合约地址是ropsten测试网络地址，
  //修改地址：
  //daoapi.commulate.setAddress("0x.....")
  //daoapi.utoken.setAddress("0x.....")
  daoapi.register.getDaos(selectAcouunt).then(e => {
      console.log("----------getDaos---------------------")
      console.log(e);

  })


  daoapi.register.createOsEvent(199, data => {

      console.log(data);
      // do something 

  })
 
 
  //......

}

connect().then(provider => {

  web3 = new Web3(provider);
  web3.eth.getAccounts().then(accounts => {
      selectAcouunt = accounts[0];
      onConnect();
  })

})

```
