# IADD币值兑换
本模块提供的3个兑换函数和一个查询函数：
- utoken 兑换成 token;
- token 兑换成 utoken;
- token 兑换成另一种token。
- 查询某token 的币值(换算成标准utoken )


## utoken 兑换成 token 
###### 函数
`utokenToToken(_value,_id) `
###### 参数
- _value: 需要兑换的utoken数量, 可以是数值型， 也可以是数值的字符串
- _id: 兑换成token 的ID 
###### 返回
返回链上操作的结果
```js
{
    "blockHash": "0x22ea13c22bb219995b067a40c8aa3df9b71810a194871b9e46a43a7e79dfe371", //hash码
    "blockNumber":  11411897, // 区块号
    "from": "0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e",  //钱包用户地址
    "to":  "0x71ec469cc6c2dc4013331ae31074bbdcb1238d09",// 合约地址
    "transactionHash": "0x3f3da7de254438ee518ba74718d843fbd26a833ceef2a46a8633406a4a0356a8",
    "transactionIndex": 46,
    "status": true,
    "gasUsed": 140002,
    ......
}
```
###### 调用方式
```js
iadd.utokenToToken(_value,_id).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

    把 1 utoken 兑换 成 ID为11 的 token 

 daoapi.iadd.utokenToToken(1,'11').then(jsonObj=>{
              console.log("---------UtokenToToken------------------------------")
                console.log(jsonObj)
    })
```


## token 兑换成 utoken
###### 函数
`tokenToUtoken(_value,_id) `
###### 参数
- _value: 需要兑换的token数量, 可以是数值型， 也可以是数值的字符串
- _id: 需要兑换token 的ID 
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
iadd.tokenToUtoken(_value,_id).then(jsonObj=>{
    console.log(jsonObj)
    
})
```

###### 示例
```js

    把 1000 token（ID为11） 兑换成 utoken 

  daoapi.iadd.tokenToUtoken(1000,'11').then(jsonObj=>{
        console.log("---------TokenToUtoken------------------------------")
        console.log(jsonObj)
    });
```


## token 兑换成另一种 token
###### 函数
`tokenToToken(_value,_fromId,_toId) `
###### 参数
- _value: 需要兑换的token(fromId)的数量, 可以是数值型， 也可以是数值的字符串
- _fromId: 被兑换token 的ID 
- _toId: 兑换成token 的ID 
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
iadd.tokenToToken(_value,_fromId,_toId).then(jsonObj=>{
     console.log(jsonObj)

})
```
###### 示例
```js

    把 1 token（ID为11） 兑换成 token （ID为12） 
 
    daoapi.iadd.tokenToToken(1,'11','12').then(jsonObj=>{
        console.log("---------TokenToToken------------------------------")
        console.log(jsonObj)
    });
```


## 查询token的币值
> token的币值 = 换算成标准utoken
###### 函数
` getPool(_id) `
###### 参数
- _id: 查询token 的ID 
###### 返回

```js
{
    "utoken": 32.581269615542475,  //utoken值
    "utokenWei": "32581269615542475979"  //utoken值，以wei表示
}
```

###### 调用方式
```js
iadd.getPool(_id).then(jsonObj=>{
     console.log(jsonObj)

})
```
###### 示例
```js

    查询 token（ID为11） 的币值 
  
    daoapi.iadd.getPool('11').then(jsonObj=>{
        console.log("----------getPool-----------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });
```

