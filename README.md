# app-style

> 这个为私人使用，但是因为不设计私有，故可公开源码
> 文件更新缓慢，请慎用

```bash
# npm install

# npm run dev
# npm run pro
# npm run watch
```
## 工具类

### display

| Name                               | Explain                                   |
| ---------------------------------- | ----------------------------------------- |
| .app-{xs\|sm\|md\|lg}-hide         | 在xs，sm，md，lg屏幕下隐藏                |
| .app-{xs\|sm\|md\|lg}-block        | 在xs，sm，md，lg屏幕下显示为 block        |
| .app-{xs\|sm\|md\|lg}-inline       | 在xs，sm，md，lg屏幕下显示为 inline       |
| .app-{xs\|sm\|md\|lg}-inline-block | 在xs，sm，md，lg屏幕下显示为 inline-block |
| .app-hide                          | 隐藏                                      |
| .app-show                          | 显示为 block                              |
| .app-float-left                    | 左浮动                                    |
| .app-float-right                   | 右浮动                                    |
| .app-float-none                    | 不浮动                                    |
| .app-clearfix                      | 清除浮动                                  |

###  spacing

| Name                                     | Explain                                                |
| ---------------------------------------- | ------------------------------------------------------ |
| .app-{mt\|mr\|mb\|ml}-{0\|5\|10\|15\|20} | 外边距（margin）上右下左值为 0, 5px, 10px, 15px, 20px  |
| .app-{mt\|mr\|mb\|ml}-auto               | 外边距（margin）上右下左值为 auto                      |
| .app-{pt\|pr\|pb\|pl}-{0\|5\|10\|15\|20} | 内边距（padding）上右下左值为 0, 5px, 10px, 15px, 20px |

###  font

| Name                                                   | Explain                                |
| ------------------------------------------------------ | -------------------------------------- |
| .app-text-{left\|center\|right}                        | 字体居左，居中，居右                   |
| .app-text-{justify\|nowrap}                            | 字体两端对齐，不换行                   |
| .app-text-{lowercase\|uppercase\|capitalize}           | 字体小写，大写，首字母大写             |
| .app-font-weight-{light\|normal\|bold}                 | 字体极细，普通，粗体                   |
| .app-font-italic                                       | 字体斜体                               |
| .app-text-elip                                         | 字体多余省略                           |
| .app-text-hide                                         | 字体隐藏                               |
| .app-text-{white\|blue\|red\|black\|gray\|transparent} | 字体白色，蓝色，红色，黑色，灰色，透明 |

###  background-color

| Name                                                 | Explain                                |
| ---------------------------------------------------- | -------------------------------------- |
| .app-bg-{white\|blue\|red\|black\|gray\|transparent} | 背景白色，蓝色，红色，黑色，灰色，透明 |
| .app-bg-light                                        | 背景亮色（比白色灰一点）               |

###  border

| Name                                                     | Explain                                |
| -------------------------------------------------------- | -------------------------------------- |
| .app-border                                              | 边框宽度1px                            |
| .app-border-0                                            | 边框宽度0px                            |
| .app-border-{top\|right\|bottom\|left}                   | 边框上右下左宽度1px                    |
| .app-border-{top\|right\|bottom\|left}-0                 | 边框上右下左宽度0px                    |
| .app-border-{white\|blue\|red\|black\|gray\|transparent} | 边框白色，蓝色，红色，黑色，灰色，透明 |
| .app-border-rounded                                      | 边框弧度4px                            |
| .app-border-rounded-{top\|right\|bottom\|left}           | 边框上右下左弧度为4px                  |
| .app-border-rounded-{circle\|0}                          | 边框弧度50%（圈），弧度0%（四方形）    |

