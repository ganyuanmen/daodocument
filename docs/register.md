#  dao管理
dao  的管理分四个步骤
1. 注册
2. 设置logo图片 [logo](./logo.md)
3. 创建OS
4. 发行token


## dao注册

###### 函数
`create(_address,_daoName,_daoShortName,_describe)`
###### 参数
- _address: 管理员帐号地址（钱包用户帐号）
- _daoName: dao 名称
- _daoShortName ： dao 符号（简称） 
- _describe: 描述
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
register.create(_address,_daoName,_daoShortName,_describe).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

    创建 dao 信息：
    {
       管理员地址：0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e
       名称：aaa测试dao
       简称： aaa
       描述: aaa描述
    } 

daoapi.register.create('0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e'
    ,'aaa测试dao'
     ,'abc'
      ,'aaa描述').then(e=>{
      console.log("----------create---------------------")
      console.log(e);
     
  })
```

## 创建OS

###### 函数
`createOs(_id,_daoName,_addressArray,_initArray)`
###### 参数
- _id : dao ID
- _daoName: dao 名称
- _addressArray: 人员结构对象数组，每个人员有两个属性： 人员地址和投票权重， 即：{address,vote} , 组成：[{address,vote},{address,vote},......]
- _initObj ： 初始化数据数组，固定是个数组元素，分别对应：[内部投票器，外部投票器，内部票权数据库编号，外部票权数据库], 该参数可省略， 默认为[1,1,1,1]
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
register.createOs(_id,_daoName,_addressArray,_initArray).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

    创建 OS 信息：
    {
        Dao ID： 41
       Dao名称：aaa测试dao
       人员结构信息(两个人，投票权重均为1)：
        [{'address':'0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e',vote:1},{'address':'0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e',vote:1}]     
       初始化数据数组：[1,1,1,1] , 可省略
    } 

daoapi.register.createOs('41'
      ,'aaa测试dao'
      ,[{'address':'0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e',vote:1},{'address':'0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e',vote:1}] 
      ,[1,1,1,1]).then(e=>{
      console.log("----------createOs---------------------")
      console.log(e);
     
  })
```



## 查询dao列表信息
> 根据管理员 的地址 查询该管理员注册的所有dao列表
###### 函数
`getDaos(_address)`
###### 参数
- _address: 注册dao 的管理员地址

###### 返回
```js
[
    {"name": "tt31","id": "40"},
    {"name": "aaa测试dao","id": "42"},
    ......
]

```
###### 调用方式
```js
  register.getDaos(_address).then(jsonObj=>{
            console.log("---------getDaos------------------------------")
            console.log(jsonObj)
        });

```

###### 示例
```js

   查询 地址为 0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e 的管理员注册的dao列表

  daoapi.register.getDaos('0x75efcbec4961d6fd3b77f271ce9e5cb7458cb69e').then(e=>{
        console.log("----------createOs---------------------")
        console.log(e);
   
    })

```



## 查询dao信息
> 根据Dao 的 ID 查询dao信息
###### 函数
`getDao(_id)`
###### 参数
- _id: dao 的 ID 

###### 返回
```js
{
    "name": "bbv",   //dao 名称
    "describe": "bbv", //dao 描述
    "osAddress": "0x016A1D362a6B1D13dC0173c6Cc4326feC6860c88",  // 创建os 地址
    "symbol": "bbv"  // dao 符号
}

```
###### 调用方式
```js
  register.getDao(_id).then(jsonObj=>{
            console.log("---------getDaos------------------------------")
            console.log(jsonObj)
        });

```

###### 示例
```js

   查询 ID 为29 的dao 信息

  daoapi.register.getDao('29').then(e=>{
        console.log("----------getDao---------------------")
        console.log(e);
   
    })

```
