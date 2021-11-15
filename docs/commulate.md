# commulate 兑换值查询
 币值兑换需要缴纳手续费， 本模块是用于查询减掉手续费后，实际兑换到的数量
## utoken 兑换成 token 
###### 函数
`utokenToToken(_value,_id) `
###### 参数
- _value: 需要兑换的utoken数量, 可以是数值型， 也可以是数值的字符串
- _id: 兑换成token 的ID 
###### 返回
```js
{
    "inAmountWei": "1000000000000000000", //需要兑换utoken数值，以wei表示
    "outAmountWei": "998000097499999999999", // 实际得到token的数值，以wei表示
    "inAmount": 1,  //需要兑换utoken数值
    "outAmount": 998.0000975  // 实际得到token的数值
}
```
###### 调用方式
```js
commulate.utokenToToken(_value,_id).then(jsonObj=>{
     console.log(jsonObj)
     console.log("%s utoken 兑换成（ID为 %s）的token, 减掉手续费后，实际兑换到的数量：%s"
     ,jsonObj.inAmount
     ,_id
     ,jsonObj.outAmount
    )
 
})
```
###### 示例
```js

    把 1 utoken 兑换 成 ID为11 的 token ，查询到的实际 token值

 daoapi.commulate.utokenToToken(1,'11').then(jsonObj=>{
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
```js
{
    "inAmountWei": "1000000000000000000000", //需要兑换token数值，以wei表示
    "outAmountWei": "998049999999999999", // 实际得到utoken的数值，以wei表示
    "inAmount": 1000,  //需要兑换utoken数值
    "outAmount": 0.99805  // 实际得到utoken的数值
}
```
###### 调用方式
```js
commulate.tokenToUtoken(_value,_id).then(jsonObj=>{
    console.log(jsonObj)
    console.log("%s token（ID为 %s）兑换成utoken, 减掉手续费后，实际兑换到的数量：%s"
    ,jsonObj.inAmount
    ,_id
    ,jsonObj.outAmount
    )
 
})
```

###### 示例
```js

    把 1000 token（ID为11） 兑换成 utoken ，查询到的实际 utoken值

  daoapi.commulate.tokenToUtoken(1000,'11').then(jsonObj=>{
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
```js
{
    "inAmountWei": "1000000000000000000", //需要兑换token数值，以wei表示
    "outAmountWei": "998000097499999998", // 实际得到token的数值，以wei表示
    "inAmount": 1,  //需要兑换utoken数值
    "outAmount": 0.9980000975 // 实际得到token的数值
}
```

###### 调用方式
```js
commulate.tokenToToken(_value,_fromId,_toId).then(jsonObj=>{
    //jsonObj: 查询到的实际兑换所得utoken数量
    console.log("%s token（ID为 %s）兑换成ID为 %s 的token, 减掉手续费后，实际兑换到的数量：%s"
     ,jsonObj.inAmount
     ,_fromId
     ,_toId
     ,jsonObj.outAmount
    )
 
})
```
###### 示例
```js

    把 1 token（ID为11） 兑换成 token （ID为12） ，查询到的实际 token （ID为12）的值
 
    daoapi.commulate.tokenToToken(1,'11','12').then(jsonObj=>{
        console.log("---------TokenToToken------------------------------")
        console.log(jsonObj)
    });
```
