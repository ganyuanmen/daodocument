# IADD 兑换事件

## utoken兑换成token 事件
###### 事件名称
`utokenTotokenEvent(maxBlockNumber,callbackFun) `
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
            "from": 转出地址
            "to":转入地址
            "tokenId": token 的ID
            "utokenWei":utoken 数量，以wei表示,
            "tokenWei":token 数量，以wei表示
            "utoken":utoken 数量,
            "token":token 数量
            }
                        
}
```
###### 调用方式
```js
iadd.utokenTotokenEvent(maxBlockNumber,callbackFun)
```
###### 示例
```js

    本次事件订阅从199 区块号开始监听

    daoapi.iadd.utokenTotokenEvent(199,data=>{

        console.log(data);
        // do something 

    })

```


## token兑换成utoken事件
###### 事件名称
`tokenToUtokenEvent(maxBlockNumber,callbackFun) `
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
            "from": 转出地址
            "to":转入地址
            "tokenId": token 的ID
            "utokenWei":utoken 数量，以wei表示,
            "tokenWei":token 数量，以wei表示
            "utoken":utoken 数量,
            "token":token 数量
            }
                        
}
```
###### 调用方式
```js
iadd.tokenToUtokenEvent(maxBlockNumber,callbackFun)
```
###### 示例
```js

    本次事件订阅从199 区块号开始监听

    daoapi.iadd.tokenToUtokenEvent(199,data=>{

        console.log(data);
        // do something 

    })

```


## token兑换成token事件
###### 事件名称
`tokenTotokenEvent(maxBlockNumber,callbackFun) `
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
            "from": 转出地址
            "to":转入地址
            "fromTokenId": 转出token 的ID
            "toTokenId": 转入token 的ID
            "fromtokenWei":转出token 数量，以wei表示,
            "toTokenWei":转入token 数量，以wei表示
            "fromToken":转出token 数量,
            "toToken":转入token 数量 
            }
                        
}
```
###### 调用方式
```js
iadd.tokenTotokenEvent(maxBlockNumber,callbackFun)
```
###### 示例
```js

    本次事件订阅从199 区块号开始监听

    daoapi.iadd.tokenTotokenEvent(199,data=>{

        console.log(data);
        // do something 

    })

```