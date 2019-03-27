# webpack-mult-entry-es6
webpack 4.0 multiple entry project for ECMA2016

# webpack 4.0 多入口配置 es6 

### 目的
    jq时代留下的大型相关项目，为求稳定，在不动UI的情况下，当你惯用ES6写法想要模块化开发/维护老项目，在这种时候webpack多入口可以解决部分需求，
    那么这种多入口配置可以做到很快的移植并投入到开发当中去。
    

- 多入口 可配置 新手适用
- 包含 webpack配置 多入口打包 静态服务
- 可以直接引入模块写react/vue项目 


### 说明
- 启动                        
    `npm`                   
    `npm install && npm serve`                      
    `yarn`                      
    `yarn install && yarn serve`                                

- 文件夹说明                 
    config                      
&#160;&#160;&#160;&#160;| complate.js   多入口`entry` `HTMLWebpakcPlugin` 配置 可根据个人喜好移植至 pages 变量               
&#160;&#160;&#160;&#160;| plugins.js    `webpack plugins` 配置                
&#160;&#160;&#160;&#160;| rules.js      `webpack loaders` 配置                
    src 静态文件，打包多入口文件 可随意更改              
        &#160;&#160;&#160;&#160;| app               
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;| index.html    `html`模板                
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;| index.scss                    
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;| index.js              
        &#160;&#160;&#160;&#160;| home              
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;| index.html    `html`模板                    
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;| index.scss                    
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;| index.js              
    server.js `express` 静态服务                
    webpack.config.js 配置文件              
    package.json                        




- wulibaibao
- Created at 2019/3/27 
