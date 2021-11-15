# token 发布事件


###### 事件名称
`publishTokenEvent(maxBlockNumber,callbackFun) `
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
            "tokenId": 发布token 的ID
            "daoId": dao 的 ID
            "timestamp": 时间戳（1633699058）
            }
                        
}
```
###### 调用方式
```js
tokens.publishTokenEvent(maxBlockNumber,callbackFun)
```
###### 示例
```js

    本次事件订阅从199 区块号开始监听

    daoapi.tokens.publishTokenEvent(199,data=>{

        console.log(data);
        // do something 

    })

```
