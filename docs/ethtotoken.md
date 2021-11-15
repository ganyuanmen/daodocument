# eth 直接兑换token
eth 可以兑换成 utoken (使用utoken 类的swap 函数), utoken 可以兑换成 token（使用IADD 类的 UtokenToToken） , eth 直接兑换成token 实际上是这两种方法的结合。会触发swap事件和UtokenToToken 事件。

###### 函数
` EthToToken(_eth,_id) `
###### 参数
- _eth: 需要兑换的ETH数量, 可以是数值型， 也可以是数值的字符串
- _id: 兑换成token 的ID 
###### 返回
返回链上操作的结果
```js
{
    "blockHash": "0x22ea13c22bb219995b067a40c8aa3df9b71810a194871b9e46a43a7e79dfe371", //交易所在块的哈希
    "blockNumber":  11411897, // 交易所在块的编号
    "from": "0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e",  //钱包用户地址
    "to":  "0x71ec469cc6c2dc4013331ae31074bbdcb1238d09",// 合约地址
    "transactionHash": "0x3f3da7de254438ee518ba74718d843fbd26a833ceef2a46a8633406a4a0356a8", //交易哈希
    "transactionIndex": 46, //交易在块中的索引位置
    "status": true,
    "gasUsed": 140002,
    ......
}
```
###### 调用方式
```js
ethToToken.ethToToken(_value,_id).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例


```js
    把0.001 ETH 兑换成 ID为11  的token 

 daoapi.ethToToken.ethToToken(0.001,'11').then(tokenAmount=>{
        console.log("-----------ethToToken----------------------------")
        console.log(tokenAmount)
        console.log("---------------------------------------")

        //查询该ID号的token币值(utoken值)
        daoapi.iadd.getPool('11').then(tokenAmount=>{
            console.log("----------getPool-----------------------------")
            console.log(tokenAmount)
            console.log("---------------------------------------")
        });
    });
```