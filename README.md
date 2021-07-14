# monorepo-react-demo

### 目录结构
###### 项目中包含 .stories.js | .stories.mdx 后缀的，都属于文档文件
```
├── packages                                包/组件 这些可以复用的
│   ├── common-utils                        封装了常用方法，和请求函数(git/svn 上的项目)
│   │   ├── dist                            打包生成的产物
│   │   │   └── ...
│   │   ├── package.json                    main 和 types 指向这里配置
│   │   └── ...
│   └── components-react                    封装了react可复用组件，基于antd (这里添加的组件，注意要补齐 storybook文档以及typescript 说明，建议用tsx写)
│       └── ...
├── projects                                开发中的项目(git/svn 上的项目)
│   └── ...
├── README.md
├── .eslintrc.js                            父层 eslintrc, 可被继承
├── lerna.json
├── package.json
```
