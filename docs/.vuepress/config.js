module.exports = {
  title: '道易程文档',  // 设置网站标题
  description : 'Adroi',
  base : '/',
  plugins: ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: 'Copied successfully!', // default is 'Copied successfully!'
    toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
    duration: 300, // prompt message display time
  }],
  //警告 webpack 的性能提示
  performance: {
    hints:'warning',
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  themeConfig : {
    nav : [
        { text: 'dao网站部署', link: '/system' }
     
    ],
    sidebar: {
        '/' : [
         
          {
              title: '函数',
              collapsable: true,
              children: ['register', 'IADD', 'tokens','utoken','ethtotoken','commulate','logo']
          },
          {
            title: '事件',
            collapsable: true,
            children: ['events_register', 'events_IADD', 'events_tokens','events_logo']
        },
       
      {
        title: '合约地址',
        collapsable: true,
        children: ['address_register', 'address_iadd', 'address_tokens','address_utoken','address_ethtotken','address_commulate','address_logo']
    },
        ]
    }
    //}
    //sidebarDepth : 3
  // }
  }
}