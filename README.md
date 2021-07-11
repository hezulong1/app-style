# app-style

在**2020/07/22**因为种种原因，重新拾起这个项目。在距离上个版本，已经快*2*年了，发现当初很多考虑不周全的地方，遂重新更新。

库乃公司与本人定制使用，但是因为不设计私有，故可公开源码。若在使用上带来不便，可以[issue](https://github.com/hezulong1/app-style/issues)给我，我也可以更好的改进。当然我很希望你可以使用的我的库，这样我也比较有成就感😀。不过从长远角度，我还是推荐你使用一些名库，因为基本问题应该都已经处理完毕：

- [normalize.css](https://github.com/necolas/normalize.css)
- [minireset.css](https://github.com/jgthms/minireset.css)
- [tailwindcss](https://github.com/tailwindcss/tailwindcss)

废话不多说，下面进入正题：

从**2.0**开始，将采用**半糖原则**，灵感来源[LuLu](https://www.zhangxinxu.com/sp/lulu/mockup/content/about/design.php)，即样式只提供*需要的*，*常用的*，发布包均是*压缩包*，默认导出的是`reboot-zh.css`包，其他包需要自己书写对应链接。

- **`reset.css`**: 格式化样式，全局归零，功能与`minireset.css`类似
- **`reboot.css`**: 包含`reset.css`，重新配置了样式，使浏览器表现尽可能一致，功能与`normalize.css`类似
- **`reboot-zh.css`**: `reboot.css`的中文重置包，主要适配中文页面

## 安装

1. `npm`安装（推荐，可定制化）

```bash
npm i @guanwei/app-style
```

2. `link`标签

```html
<link href="https://unpkg.com/@guanwei/app-style" rel="stylesheet" type="text/css" media="screen">
```

## 使用

如果直接使用`css`那么无需关心，直接引入即可

> Note：默认采用中文，即`reboot-zh.css`，其他包请引入相对应路径

### 定制化

提供了 scss 和 less 版本，可依据自身需求合理调整使用

