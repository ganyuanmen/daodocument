# utoken 处理
 
## 兑换 utoken 
> ETH 可以兑换成 utoken , 但 utoken 不能兑换为ETH
###### 函数
`swap(_value) `
###### 参数
- _value: 需要兑换的ETH数量, 可以是数值型， 也可以是数值的字符串

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
utoken.swap(_value).then(jsonObj=>{
     console.log(jsonObj)
 
})
```
###### 示例
```js

    把 0.01 ETH 兑换 utoken 

  daoapi.utoken.swap(0.01,'ether').then(jsonObj=>{
        console.log("-----------------swap----------------------")
        console.log(jsonObj)
        //查询本帐号的utoken 余额
        daoapi.utoken.balanceOf(propertis.selectedAccount).then(jsonObj=>{
            console.log("---------balanceOf------------------------------")
            console.log(jsonObj)
        });
    });

```


## 查询余额
###### 函数
`balanceOf(_address) `
###### 参数
- _address: 用户的钱包地址
###### 返回
```js
{
    "utoken": 380.9103585236715, // utoken 余额
    "utokenWei": "380910358523671500015" // utoken 余额，以wei表示
}
```
###### 调用方式
```js
  utoken.balanceOf(_address).then(jsonObj=>{
            console.log("---------balanceOf------------------------------")
            console.log(jsonObj)
        });

```

###### 示例
```js

   查询地址为 0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E 的utoken 余额

  daoapi.utoken.balanceOf('0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E').then(jsonObj=>{
            console.log("---------balanceOf------------------------------")
            console.log(jsonObj)
        });

```


## 查询兑换比例
> 查询 1 ETH 可以兑换 utoken 的数量
###### 函数
`getPrice() `
###### 参数
- 无

###### 返回
```js
{
    "priceWei": "3400000000610000000000",  //兑换比例，1 ETH 可以兑换utoken 的数量，以wei表示
    "price": 3400.00000061  //兑换比例，1 ETH 可以兑换utoken 的数量
}
```

###### 调用方式
```js
utoken.getPrice().then(jsonObj=>{
    console.log("---------getPrice------------------------------")
    console.log(jsonObj)
 
})
```
###### 示例
```js

    查询兑换比例
 
     
    daoapi.utoken.getPrice().then(jsonObj=>{
        console.log("-------------getPrice--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });
  
```



## 授权/取消授权
> 授权指的是允许指定的合约操作本帐号的utoken, 只有授权之后，被授权的合约才能从某帐号上划走utoken或从其它帐号划入utoken。授权是有额度的，不能操作超过授权额度的数量。授权额度用完之后， 需要重新授权。
###### 函数
`approve(_spaneraddress,_amount) `
###### 参数
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
utoken.approve(_spaneraddress,_amount).then(jsonObj=>{
    console.log("---------approve------------------------------")
    console.log(jsonObj)
 
})
```
###### 示例
```js

    给地址为 0x9752AE638E7f62dcB802cC0755570B1af528b6E8 的合约 授权 1000 utoken  的额度
 
    daoapi.utoken.approve('0x9752AE638E7f62dcB802cC0755570B1af528b6E8',1000).then(jsonObj=>{
        console.log("-------------approve--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });
  
```



## 查询授权额度
###### 函数
`allowance(_owneraddress,_speneraddress) `
###### 参数
- _owneraddress: 用户的钱包地址
- _speneraddress：查询授权的合约地址
###### 返回
```js
{
    "approveSumWei": "9870000000000000000", // 当前的授权额度还有9.87 utoken,以wei表示
    "approveSum": 9.87 // 当前的授权额度还有9.87 utoken
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

   查询地址为合约地址为 0x9752AE638E7f62dcB802cC0755570B1af528b6E8 授权余额
   查询用户的钱包地址：0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E

    daoapi.utoken.allowance('0x75EFcbeC4961D6FD3B77F271ce9e5cb7458cb69E'
    ,'0x9752AE638E7f62dcB802cC0755570B1af528b6E8').then(jsonObj=>{
        console.log("-------------getPrice--------------------------")
        console.log(jsonObj)
        console.log("---------------------------------------")
    });

```
