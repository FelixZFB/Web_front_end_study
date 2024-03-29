## Web前端笔记 ##


## 第十部分：json ajax cookie webStorage jqueryUI


## 1. json
- json
    json是 JavaScript Object Notation 的首字母缩写，
    单词的意思是javascript对象表示法，
    这里说的json指的是类似于javascript对象的一种数据格式，
    目前这种数据格式比较流行，逐渐替换掉了传统的xml数据格式。

- javascript自定义对象：
    var oMan = {
        name:'tom',
        age:16,
        talk:function(s){
            alert('我会说'+s);
        }
    }

- json格式的数据：
    {
        "name":"tom",
        "age":18
    }

- 与json对象不同的是，json数据格式的属性名称和字符串值需要用双引号引起来，
    用单引号或者不用引号会导致读取数据错误。

- json的另外一个数据格式是数组，和javascript中的数组字面量相同。
    ["tom",18,"programmer"]

# 如果json文件是字典形式，load读取出来就是python字典类型
# 如果json文件是数组形式，load读取出来就是python列表类型
# 读取出来以后直接当做字典或者列表操作即可

- json文件读取与写入，python中字典与json格式之间转换
    - 参考Python_development_skills_summary项目中004文件中相关实例
    
## 2. ajax
- ajax技术的目的是让javascript发送http请求，与后台通信，获取数据和信息。
    ajax技术的原理是实例化xmlhttp对象，使用此对象与后台通信。
    ajax通信的过程不会影响后续javascript的执行，从而实现异步。

- 同步和异步
    现实生活中，同步指的是同时做几件事情，异步指的是做完一件事后再做另外一件事，
    程序中的同步和异步是把现实生活中的概念对调，也就是程序中的异步指的是现实生活中的同步，
    程序中的同步指的是现实生活中的异步。

- 局部刷新和无刷新
    ajax可以实现局部刷新，也叫做无刷新，无刷新指的是整个页面不刷新，
    只是局部刷新，ajax可以自己发送http请求，不用通过浏览器的地址栏，
    所以页面整体不会刷新，ajax获取到后台数据，
    更新页面显示数据的部分，就做到了页面局部刷新。

- 同源策略
    ajax请求的页面或资源只能是同一个域下面的资源，不能是其他域的资源，
    这是在设计ajax时基于安全的考虑。特征报错提示：
        XMLHttpRequest cannot load https://www.baidu.com/. No  
        'Access-Control-Allow-Origin' header is present on the requested resource.  
        Origin 'null' is therefore not allowed access.

- $.ajax使用方法
    - 常用参数：
        1、url 请求地址
        2、type 请求方式，默认是'GET'，常用的还有'POST'
        3、dataType 设置返回的数据格式，常用的是'json'格式，也可以设置为'html'
        4、data 设置发送给服务器的数据
        5、success 设置请求成功后的回调函数
        6、error 设置请求失败后的回调函数
        7、async 设置是否异步，默认值是'true'，表示异步 
        
    - 写法：
    新的写法(推荐)： 
        $.ajax({
            url: 'js/data.json',
            type: 'GET',
            dataType: 'json',
            data:{'aa':1}
        })
        .done(function(data) {
            alert(data.name);
        })
        .fail(function() {
            alert('服务器超时，请重试！');
        });
        
        // data.json里面的数据是： {"name":"tom","age":18}
        
- jsonp
    ajax只能请求同一个域下的数据或资源，有时候需要跨域请求数据，
    就需要用到jsonp技术，jsonp可以跨域请求数据，
    它的原理主要是利用了<script>标签可以跨域链接资源的特性。
    比如：
    <!--可以引入在线的js框架，相当于就是script跨域请求的资源-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	
    jsonp和ajax原理完全不一样，不过jquery将它们封装成同一个函数。
    
    - 写法：(与ajax请求数据和返回的数据都不同)
        $.ajax({
            url:'js/data.js',
            type:'get',
            dataType:'jsonp',   
            jsonpCallback:'fnBack'
        })
        .done(function(data){
            alert(data.name);
        })
        .fail(function() {
            alert('服务器超时，请重试！');
        });
        
        // data.js里面的数据： fnBack({"name":"tom","age":18});
    
- jsonp读取的数据和ajax不一样，jsonp数据是json中的数据放在一个fnBack()函数里面

## 3. 本地存储：Cookie LocalStorage SessionStorage
- 本地存储分为cookie，以及新增的localStorage和sessionStorage

- 1、cookie 
    存储在本地，容量最大4k，
    缺点：在同源的http请求时携带传递，损耗带宽，
    可设置访问路径，只有此路径及此路径的子路径才能访问此cookie，
    在设置的过期时间之前有效。


- cookie的使用(设置和读取)  
- jquery.cookie.js插件应用
    cookie在jquery中有个插件，jquery.cookie.js
    先引入jQuery库，然后再引入jquery.cookie.js
    然后启动js的服务器环境（参考09文件夹），就可以操作使用cookie了
    - 需要依赖jQuery库,使用服务器环境访问查看
    
    // 第一个参数是cookie键的名称，第二个是值，
    // 第三个字典是：expires:7 过期时间7天，存储路径，/代表该文件的根目录下
    
    设置cookie
    $.cookie('mycookie','ok123!',{expires:7,path:'/'});
    读取cookie信息,需要知道cookie的名称
    $.cookie('mycookie');
    
    具体参考：004案例和004图片
    
- 2. Web Storage
    localStorage 和 sessionStorage 合称为Web Storage , 
    Web Storage支持事件通知机制，可以将数据更新的通知监听者，
    Web Storage的api接口使用更方便。
    iPhone的无痕浏览不支持Web Storage，只能用cookie。
    
    - 他们不需要Jquery库，直接在script里面写即可，然后使用服务器环境访问查看
    
- 2.1 localStorage(本地存储)
    存储在本地，容量为5M或者更大，不会在请求时候携带传递，
    在所有同源窗口中共享，数据一直有效，除非人为删除，可作为长期数据。
    
    //设置：
        localStorage.setItem("dat", "456");
        localStorage.dat = '456';
    //获取：
        localStorage.getItem("dat");
        localStorage.dat
    //删除
        localStorage.removeItem("dat");
        
- 2.2 sessionStorage(会话存储)
    存储在本地，容量为5M或者更大，不会在请求时候携带传递，
    在同源的当前窗口关闭前有效（出于安全的考虑）
    - 参考005案例和005图片
    
## 4. jQuery UI插件
- jQuery UI是以 jQuery 为基础的代码库。
    包含底层用户交互、动画、特效和可更换主题的可视控件。
    我们可以直接用它来构建具有很好交互性的web应用程序。

- jqueryUI 网址
    http://jqueryui.com/

- 常用功能：
    1.拖拽--------最常用
    2.自定义滑动条
    3.自定义滚动条
       
    