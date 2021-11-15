# tokens 处理


## 发布token
> 发布token 的前提条件是：先注册dao, 再创建该dao的OS ([查看dao注册和发布OS](./register.md)), 才能发布token，每一个dao只能发布一次，重复发布会报合约错误。
###### 函数
`issue(daoId) `
###### 参数
- daoId: 注册dao的ID
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
tokens.issue(daoId).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

   为daoId 为37的 dao 发布token

 daoapi.tokens.issue('37').then(jsonObj=>{
        console.log("--------issue-------------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    })
```


## 查询token 余额 
###### 函数
` balanceOf(_id,_address) `
###### 参数
- _address: 用户钱包地址
- _id: token 的ID 
###### 返回
```js
{
    "token": 32505.79948165454, //token 余额
    "tokenWei": "32505799481654540025836" //token 余额,以wei表示
}
```
###### 调用方式
```js
tokens.balanceOf(_id,_address).then(jsonObj=>{
     console.log(jsonObj)
 
})
```
###### 示例
```js

   查询到用户钱包地址为：0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E，
   token 的ID 为11 的token 余额

 daoapi.tokens.balanceOf('11','0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E').then(jsonObj=>{
        console.log("---------balanceOf------------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    })
```




## 授权/取消授权
> 授权指的是允许指定的合约操作本帐号的token, 只有授权之后，被授权的合约才能从某帐号上划走token或从其它帐号划入token。授权分两两种： 1 是全局授权，没有额度，只授权一次，针对该用户发布所有token；2 是单个token 授权，每次只能授权某一个token , 类似于 utoken  的授权，有授权额度。授权额度用完之后， 需要重新授权。当同时进行两种方式的授权时， 以全局授权为主。
#### 全局授权
###### 函数
`approveAll(_spaneraddress,_status) `
###### 参数
- _spaneraddress: 指定授予权限的合约地址
- _status: 授予状态, true  表示授权，false 表示取消授权
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
tokens.approveAll(_spaneraddress,_status).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

   为合约地址为: 0x9752AE638E7f62dcB802cC0755570B1af528b6E8 全局授权

  daoapi.tokens.approveAll('0x9752AE638E7f62dcB802cC0755570B1af528b6E8',true).then(jsonObj=>{
        console.log("--------approveAll-------------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
      
    })
```




#### 单独授权

###### 函数
`approve(_id,_spaneraddress,_amount) `
###### 参数
- _id: token 的ID
- _spaneraddress： 指定授予权限的合约地址
- _amount： 授权额度(允许操作utoken 的最大数量), 当为0时，取消之前的授权。

###### 返回
```js
返回链上操作的结果
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
tokens.approve(_id,_spaneraddress,_amount).then(jsonObj=>{
    console.log("---------approve------------------------------")
    console.log(jsonObj)
 
})
```
###### 示例
```js

   把 token(ID为11)  给地址为 0x9752AE638E7f62dcB802cC0755570B1af528b6E8 的合约 授权 100000 token  的额度
 
    daoapi.tokens.approve('11','0x9752AE638E7f62dcB802cC0755570B1af528b6E8',100000).then(jsonObj=>{
        console.log("-------------approve--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });
  
```



## 授权的查询
>针对两种不同的授权方式，需要用两种不同的函数进行查询， 用approveAll 授权的，只能用 allowanceAll 查询 ，用 用approve授权的，只能用 allowance查询。
#### 全局授权查询
###### 函数
`allowanceAll(_owneraddress,_spenneraddress) `
###### 参数
- _owneraddress: 用户的钱包地址
- _speneraddress：查询授权的合约地址
###### 返回
```js
{
    "status": false   //false 表示未授权，true 表示已授权
}
```
###### 调用方式
```js
  utoken.allowance(_owneraddress,_speneraddress) (jsonObj=>{
            console.log("---------balanceOf------------------------------")
            console.log(jsonObj)
        });

```

###### 示例
```js

   查询地址为合约地址为 0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E 授权余额
   查询用户的钱包地址：0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E

    daoapi.tokens.allowanceAll('0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E'
    ,'0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E').then(jsonObj=>{
        console.log("-------------allowanceAll--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });

```
#### 单独授权查询
###### 函数
`allowance(_id,_owneraddress,_spenneraddress) `
###### 参数
- _id: token 的ID
- _owneraddress: 用户的钱包地址
- _speneraddress：查询授权的合约地址
###### 返回
```js
{
    "approveSumWei": "100000000000000000000000",//授权token 余额 ，以wei表示
    "approveSum": 100000 //授权token 余额
}
```
###### 调用方式
```js
  utoken.allowance(_id,_owneraddress,_speneraddress) (jsonObj=>{
            console.log("---------balanceOf------------------------------")
            console.log(jsonObj)
        });

```

###### 示例
```js

   查询地址为合约地址为 0x9752AE638E7f62dcB802cC0755570B1af528b6E8 授权余额
   查询用户的钱包地址：0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E
   查询token 的ID为11

    daoapi.tokens.allowance('11','0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E'
    ,'0x9752AE638E7f62dcB802cC0755570B1af528b6E8').then(jsonObj=>{
        console.log("-------------allowance--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });

```


## 查询dao信息
> 根据token 的Id 查询发布token 的 dao信息
###### 函数
`getInfo(_id)`
###### 参数
- _id: token 的ID

###### 返回
```js
{
    "symbol": "bbv",  // doa 符号
    "name": "bbv", //dao 名称 
    "id": "29",  //dao ID 
    "manager": "0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E" // 注册dao 用户地址
}
```
###### 调用方式
```js
  tokens.getInfo(_id) (jsonObj=>{
            console.log("---------getInfo------------------------------")
            console.log(jsonObj)
        });

```

###### 示例
```js

   查询token(ID为11) 的dao 注册信息

    daoapi.tokens.getInfo('11').then(jsonObj=>{
        console.log("-------------getInfo--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });

```


