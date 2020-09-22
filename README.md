# Zeus 项目的布局组件

## 安装

### 1. 下载 npm 包

```js
npm i --save zeus-frame-layout
```

### 2. 在 bsy.json 中登记

```js
{
  "options": {
    "esModule": [
      "zeus-frame-layout"
    ]
  }
}
```

## 在代码中使用

```jsx
import FrameLayout from 'zeus-frame-layout'

export class App extends React.Component {
  render(){
    return (
      <FrameLayout
        apiDomain='http://xxx.xx.xx.xx'
        logo="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
        appName="测试平台">
        <YourComponent/>
      </FrameLayout>
    )
  }
}

```

## API

| 参数        | 是否必填   | 说明    |  类型  |  默认值
| --------   | ----------:| -----:   | :----: |  :----: |
| apiDomain   | 必填     | 接口请求地址      |   string    | -
| logo    | 非必填|   logo路径    |   string    | -
| appName    | 必填|   平台名称    |   string    | -
| mode    | 非必填|   三种可选的菜单模式：sider+header;sider;header    |   string    | "sider+header"
| needFooter    | 非必填|   是否需要页脚    |   boolean    | true
| needFullScreen    | 非必填|   是否需要全屏按钮    |   boolean    | true
| menus    | 非必填|   自定义菜单数据    |  array   | -
| apps    | 非必填|   自定义平台数据    |  object   | -
| userName | 非必填| 自定义用户名数据      |   string    | -
| contactors | 非必填   |   自定义联系人数据    |   array    | -
| onLogout | 非必填   |   自定义登出逻辑    |   function    | 见下方
| myHistory | 非必填   |   自定义 history 对象    |   object    | -

```jsx
// onLogout 的示例
function (domain) {
    const clearItems = ['jwtToken', 'currentRoute', 'currentUrl', 'menu', 'apps', 'cname', 'apis', 'resources', 'name', 'JWT_TOKEN', 'MENU_INFO']
    clearItems.forEach(item => {
      window.localStorage.removeItem(item)
    })
    window.location.assign(domain + '/account/user/logout');
  }
```

## 更新日志
#### 1.0.0
> 2020.09.21
> - 🌟 初始化菜单布局组件

#### 1.0.2
> 2020.09.22
> - 修改readme
 -->