# app-style

在**2020/07/22**因为种种原因，我又重新拾起这个项目。在距离上个版本，已经快*2*年了，发现当初很多考虑不周全的地方，遂重新更新。

库乃公司与本人定制使用，但是因为不设计私有，故可公开源码。若在使用上带来不便，可以[issue]()给我，我也可以更好的改进。当然我很希望你可以使用的我的库，这样我也比较有成就感😀。不过从长远角度，我还是推荐你使用一些名库，因为基本问题应该都已经处理完毕：

- [normalize.css](https://github.com/necolas/normalize.css)
- [minireset.css](https://github.com/jgthms/minireset.css)
- [tailwindcss](https://github.com/tailwindcss/tailwindcss)

废话不多说，下面进入正题：

从**2.0**开始，将采用**半糖原则**，灵感来源[LuLu](https://www.zhangxinxu.com/sp/lulu/mockup/content/about/design.php)，即样式只提供*需要的*，*常用的*，发布包均是*压缩包*，默认导出的是`reboot.css`包，其他包需要自己书写对应链接。

- **`reset.css`**: 格式化样式，全局归零，功能与`minireset.css`类似
- **`reboot.css`**: 包含`reset.css`，重新配置了样式，使浏览器表现尽可能一致，功能与`normalize.css`类似
- **`share.css`**: 工具包，只要分享一些原子样式
- **`print.css`**: 打印需要用的包
- **`animation.css`**：动画库，仅仅提供一些非常用的动画
- **`app.css`**：包含了`reboot.css`，`animation.css`，`share.css`的包

## 安装

1. 通过`npm`安装（推荐，可定制化）
```bash
npm i @guanwei/app-style
```
2. `link`标签
```html
<link href="https://unpkg.com/@guanwei/app-style" rel="stylesheet" type="text/css" media="screen">
```
## 使用

如果直接使用`css`那么无需关心，直接引入即可

### 定制化

更推荐是直接使用`scss`来，其中在`src/var`是所有的变量，可以使用文件来覆盖，可以参考注释和字面意思。

#### share.css

默认是只有清空配置，如果需要配置，引入`share.scss`文件，然后在项目内你需要新建一个`.scss`文件，再重新配置：

```scss
$enable-border: false; // 启用边框，默认是 false
$enable-space: false; // 启用间距，默认是 false

// 如果上述启用，那么可以对应变更设置
$border-color: #000; // 边框色，默认是 #000
$space: 15px; // 间距，默认是 15px
```
