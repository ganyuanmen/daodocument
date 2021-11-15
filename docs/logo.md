# logo图片处理
> 可以接收任何类型的图片和 zip 压缩的图片，上传的图片文件必须有后缀名。建议上传的图片先经zip 压缩，以节约链上的空间和消耗的gas。zip 压缩包中只留一张图片，如果有多张图片， 会随机抽取一张做logo。上传的图片文件或zip 文件，由于链上的限制， 一般不超过10k, 如果超过链上的限制， 会报合约错误。

## 设置logo
> 该方法应用于首次设置，不能重复设置，需要修改logo的请使用changeLogo。


###### 函数
`setLogo(_id,_file) `
###### 参数
- _id: dao 的ID
- _file: logo文件
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
logo.setLogo(_id,_file).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

    给ID为29的dao 设置logo

        document.querySelector('input[type="file"]').addEventListener("change",function(){
            daoapi.logo.setLogo('29', this.files[0]).then(jsonObj=>{
              console.log("---------setLogo------------------------------")
              console.log(jsonObj)
         })

    })

 
```


## 更改logo
> 该方法的使用有两个前提条件，第一个条件：已经设置logo的dao ,第二个条件： 经过提案的dao。 不满足这两个条件的会报合约错误，如果是首次设置logo,请使用setLogo函数。


###### 函数
`changeLogo(id, _file) `
###### 参数
- _id: dao 的ID
- _file: logo文件
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
logo.changeLogo(_id,_file).then(jsonObj=>{
     console.log(jsonObj)
    
})
```
###### 示例
```js

    给ID为29的dao 设置logo

        document.querySelector('input[type="file"]').addEventListener("change",function(){
            daoapi.logo.changeLogo('29', this.files[0]).then(jsonObj=>{
              console.log("---------setLogo------------------------------")
              console.log(jsonObj)
         })

    })

 
```



## 获取logo图片
> 根据dao 的id 获取logo图片
###### 函数
` getLogo(_id) `
###### 参数
- _id: dao 的ID 
###### 返回

```js
以base64 的方式返回图片的src值， 可以在接赋值给img 元素的src 属性值
{
    
    "src": "data:image/WEBP;base64,......" 
}
```

###### 调用方式
```js
logo.getLogo(_id).then(jsonObj=>{
     console.log(jsonObj)

})
```
###### 示例
```js

    查询 dao（ID为41） 的logo图片
  
    daoapi.logo.getLogo('41').then(e=>{
      console.log("----------getLogo---------------------")
       document.querySelector('img[id="qq11"]').src=e.src;

  })
```

