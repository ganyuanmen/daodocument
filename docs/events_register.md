# dao 注册事件

## dao注册事件
###### 事件名称
`createDaoEvent(maxBlockNumber,callbackFun) `
###### 参数
- maxBlockNumber: 订阅该事件的最大区块号，即：从这个区块开始监听事件
- callbackFun: 回调函数

###### 传入回调函数的数据

```js
{
    "address": 合约地址,
    "blockHash": 交易所在块的哈希,
    "blockNumber":交易所在块的编号,
    "transactionHash": 交易哈希,
    "transactionIndex":交易在块中的索引位置
    "event": 事件名称
    "data": {
            "name": dao 名称,
            "symbol": dao符号(简称),
            "describe": dao描述,
            "managerAddress":注册dao的管理员地址,
            "daoId": dao 的 ID
            }
                        
}
```
###### 调用方式
```js
register.createDaoEvent(maxBlockNumber,callbackFun)
```
###### 示例
```js

    本次事件订阅从199 区块号开始监听

    daoapi.register.createDaoEvent(199,data=>{

        console.log(data);
        // do something 

    })

```


## dao创建OS事件
###### 事件名称
`createOsEvent(maxBlockNumber,callbackFun) `
###### 参数
- maxBlockNumber: 订阅该事件的最大区块号，即：从这个区块开始监听事件
- callbackFun: 回调函数

###### 传入回调函数的数据

```js
{
    "address": 合约地址,
    "blockHash": 交易所在块的哈希,
    "blockNumber":交易所在块的编号,
    "transactionHash": 交易哈希,
    "transactionIndex":交易在块中的索引位置
    "event": 事件名称
    "data": {
            "daoId": dao 的 ID
            "osAddress": OS 地址
            }
                        
}
```
###### 调用方式
```js
register.createOsEvent(maxBlockNumber,callbackFun)
```
###### 示例
```js

    本次事件订阅从199 区块号开始监听

    daoapi.register.createOsEvent(199,data=>{

        console.log(data);
        // do something 

    })

```