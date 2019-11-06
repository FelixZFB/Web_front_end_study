## Web前端学习笔记 ##


## 第五部分：JavaScript


## 1. JavaScript介绍
- JavaScript是运行在浏览器端的脚步语言，
    JavaScript主要解决的是前端与用户交互的问题，
    包括使用交互与数据交互。 JavaScript是浏览器解释执行的，
    前端脚本语言还有JScript（微软，IE独有），ActionScript( Adobe公司，需要插件)等。
    
- 前端三大块
    1、HTML：页面结构
    2、CSS：页面表现：元素大小、颜色、位置、隐藏或显示、部分动画效果
    3、JavaScript：页面行为：部分动画效果、页面与用户的交互、页面功能 

- JavaScript格式
    js对缩进没有要求，每一句js代码使用分号分开即可
    缩进没有要求，可以写在一行，实际书写缩进是为了代码整洁，符合规范
    

- JavaScript注释
    1、一条javascript语句应该以“;”结尾
    2、多个相同变量，写在一起，使用逗号“,”
    3、// 单行注释,两个斜线
          多行注释,类似css样式的注释
            /* 
            xxx
            xxx 
            */ 
            
- JavaScript运行：
    js代码一般都是引入到HTML或者PHP页面，然后使用浏览器运行
    网页代码从上往下依次运行，js代码依次运行，每刷新一次网页
    就会执行一行js代码
    
    
## 2. JavaScript嵌入页面的方式
- 和css一样，有3中引入方式
    1、行间事件（主要用于事件）
        <input type="button" name="" onclick="alert('ok！');">
    
    2、页面script标签嵌入
        <script type="text/javascript">        
            alert('ok！');
        </script>
    3、外部引入
        <script type="text/javascript" src="js/index.js"></script>
    

## 3. 变量
- JavaScript 是一种弱类型语言，javascript的变量类型由它的值来决定。 
    定义变量需要用关键字 'var' 
    var iNum = 123;
    var sTr = 'asd';
    //同时定义多个变量可以用","隔开，公用一个‘var’关键字
    var iNum = 45,sTr='qwe',sCount='68';
    
- 变量类型
    - 5种基本数据类型：
        1、number 数字类型
        2、string 字符串类型
        3、boolean 布尔类型 true 或 false
        4、undefined undefined类型，变量声明未初始化（只定义一个变量，但是不赋值），它的值就是undefined
        5、null null类型，表示空对象，如果定义的变量将来准备保存对象，可以将变量初始化为null,在页面上获取不到对象，返回的值就是null    
    - 1种复合类型：
        object
        
- 变量、函数、属性、函数参数命名规范
    1、区分大小写
    2、第一个字符必须是字母、下划线（_）或者美元符号（$）
    3、其他字符可以是字母、下划线、美元符或数字 
    
-  匈牙利命名风格：
    对象o Object 比如：oDiv
    数组a Array 比如：aItems
    字符串s String 比如：sUserName
    整数i Integer 比如：iItemCount
    布尔值b Boolean 比如：bIsComplete
    浮点数f Float 比如：fPrice
    函数fn Function 比如：fnHandler
    正则表达式re RegExp 比如：reEmailCheck 
    指定变量类型，变量名使用大小写驼峰命名
 
    
## 4. js获取元素方法1
- 可以使用内置对象document上的getElementById方法来获取页面上设置了id属性的元素，
    获取到的是一个html对象，然后将它赋值给一个变量
    <script type="text/javascript">
        var oDiv = document.getElementById('div1');
    </script>
    ....
    <div id="div1">这是一个div元素</div>

- 如果把javascript写在元素的上面，就会出错，
    因为页面上从上往下加载执行的，javascript去页面上获取元素div1的时候，
    元素div1还没有加载，解决方法有两种
    - 方法1：将javascript放到页面最下边，body标签的结尾处
    - 方法2：将javascript语句放到window.onload触发的函数里面,获取元素的语句会在页面加载完后才执行
            <script type="text/javascript">
                window.onload = function(){
                    var oDiv = document.getElementById('div1');
                }
            </script>

            
## 5. js操作元素属性
- 获取的页面元素，就可以对页面元素的属性进行操作，属性的操作包括属性的读和写。

- 操作属性的方法
    1、“.” 操作
    2、“[ ]”操作

- 属性写法
    1、html的属性和js里面属性写法一样
    2、“class” 属性写成 “className”
    3、“style” 属性里面的属性，有横杠的改成驼峰式，比如：“font-size”，改成”style.fontSize”