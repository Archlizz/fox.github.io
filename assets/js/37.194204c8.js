(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{605:function(t,a,s){"use strict";s.r(a);var r=s(1),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fox3-0-app打包指南-ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fox3-0-app打包指南-ios"}},[t._v("#")]),t._v(" Fox3.0 APP打包指南(IOS)")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#初始版本包说明"}},[t._v("初始版本包说明")]),s("ul",[s("li",[s("a",{attrs:{href:"#configuration"}},[t._v("configuration")])]),s("li",[s("a",{attrs:{href:"#workspace"}},[t._v("workspace")])])])]),s("li",[s("a",{attrs:{href:"#初始版本包打包"}},[t._v("初始版本包打包")]),s("ul",[s("li",[s("a",{attrs:{href:"#步骤一"}},[t._v("步骤一")])]),s("li",[s("a",{attrs:{href:"#步骤二"}},[t._v("步骤二")])])])]),s("li",[s("a",{attrs:{href:"#app打包"}},[t._v("APP打包")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"初始版本包说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始版本包说明"}},[t._v("#")]),t._v(" 初始版本包说明")]),t._v(" "),s("p",[t._v("初始版本包是用于在安装app后，第一次打开APP后解压的资源。如下图所示，版本包中一般包含两个文件夹：\n"),s("img",{attrs:{src:"http://static.zybuluo.com/jiangch316/t8oedjitsasbnqsb3me871ex/version_architecture.png",alt:"version_architecture.png-68.1kB"}})]),t._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" configuration")]),t._v(" "),s("p",[t._v("放置配置文件，其中client.properties是主要的配置文件,配置说明如下")]),t._v(" "),s("pre",[s("code",[t._v("#主工程\nweb/mainApp=fox\n#设备回退键触发事件\nweb/backAction=javascript:fox.custom.logout()\n#是否启用更新\nversion/updateEnabled=false\n#版本服务器地址,可支持列表，以‘,’分割\nversion/address=http://192.144.128.218:9291\n#版本服务器更新策略，选项问：fore：必须更新完成后才能进入，options:可选\nversion/updatePolicy=options\n")])]),t._v(" "),s("h3",{attrs:{id:"workspace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[t._v("#")]),t._v(" workspace")]),t._v(" "),s("p",[t._v("放置web资源，内部结构如下")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("main_app")]),t._v(" 主工程(名称可改)，必须与client.properties中得入口APP名保持一致")]),t._v(" "),s("li",[s("strong",[t._v("h5_apps")]),t._v(" 子工程目录，可多个目录名和应用名一致")]),t._v(" "),s("li",[s("strong",[t._v("cdn")]),t._v(" 公共JS、CSS库目录，是平台CND路径的本地缓存目录")])]),t._v(" "),s("blockquote",[s("p",[t._v("PS：初始版本包的示例一般会在源代码包的version文件夹下")])]),t._v(" "),s("h2",{attrs:{id:"初始版本包打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始版本包打包"}},[t._v("#")]),t._v(" 初始版本包打包")]),t._v(" "),s("p",[t._v("初始版本包打包有两种方式，分别为"),s("strong",[t._v("在线打包")]),t._v("和"),s("strong",[t._v("手工打包")]),t._v("，下面我只介绍手工打包。")]),t._v(" "),s("h3",{attrs:{id:"步骤一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[t._v("#")]),t._v(" 步骤一")]),t._v(" "),s("p",[t._v("在fox/version目录下建立目录，目录名和app的 bundle identifier保持一致，规则为：")]),t._v(" "),s("pre",[s("code",[t._v(" bundle identifier中点替换为下划线，例如  fox.app -> fox_app\n")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://static.zybuluo.com/jiangch316/lb6fisxybz0wkyyea8qxuhno/build_step_ios_1.jpg",alt:"build_step_ios_1.jpg-105.9kB"}})]),t._v(" "),s("h3",{attrs:{id:"步骤二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[t._v("#")]),t._v(" 步骤二")]),t._v(" "),s("p",[t._v("把configuration 和 workspace目录加入到version对应的目录下面")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://static.zybuluo.com/jiangch316/1skgrqdl9aehvw2f6dmn4j1h/build_step_ios_2.jpg",alt:"build_step_ios_2.jpg-37.9kB"}})]),t._v(" "),s("h2",{attrs:{id:"app打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app打包"}},[t._v("#")]),t._v(" APP打包")]),t._v(" "),s("p",[t._v("APP打包需要使用Xcode，请预先准备环境。\n选择XCode顶部菜单Product->Archive\n具体过程请baidu或goodgle")])])}),[],!1,null,null,null);a.default=e.exports}}]);