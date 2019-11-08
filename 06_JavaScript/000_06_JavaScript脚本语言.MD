## Web前端学习笔记 ##


## 第五部分：JavaScript


## 1. JavaScript介绍
- JavaScript是运行在浏览器端的脚步语言，
    JavaScript直接有浏览器解释执行不需要编译
    JavaScript主要解决的是前端与用户交互的问题，
    包括使用交互与数据交互。 JavaScript是浏览器解释执行的，
    前端脚本语言还有JScript（微软，IE独有），ActionScript( Adobe公司，需要插件)等。
    
- 前端三大块
    1、HTML：页面结构
    2、CSS：页面表现：元素大小、颜色、位置、隐藏或显示、部分动画效果
    3、JavaScript：页面行为：部分动画效果、页面与用户的交互、页面功能 


- Javascript组成
    1、ECMAscript javascript的语法（变量、函数、循环语句等语法）
    2、DOM 文档对象模型 操作html和css的方法(修改html内容，css的样式等)
    3、BOM 浏览器对象模型 操作浏览器的一些方法(浏览器弹出弹框，定时器等)


- JavaScript格式
    js对缩进没有要求，每一句js代码使用分号分开即可
    代码内部的function函数，if——else调节语句等等使用大括号包裹起来的内容，后面不写分号“；”
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

            
## 4.1. js操作元素属性
- 获取的页面元素，就可以对页面元素的属性进行操作，属性的操作包括属性的读和写。

- 操作属性的方法
    1、“.” 操作 .属性name 和句点法只用一样
        
        var oDiv1 = document.getElementById('div1');
        
        oDiv1.style.color = 'red';
        oDiv1.style.fontSize = '32px';
        
    2、“[ ]”操作 将元素内置属性使用变量替换，就需要使用
        
        var sMystyle = 'color';
        var sValue = 'red';
        
        oDiv.style.sMystyle = sValue;    该句不会产生任何效果
        oDiv.style.color = sValue;       该句可以修改属性
        
        /*元素内置属性用变量代替，就需要使用[]操作*/
        oDiv.style[sMystyle] = sValue
        - 参考实例

- 属性写法
    1、html的属性和js里面属性写法一样
    2、“class” 属性写成 “className”（特殊地方）
    3、“style” 属性里面的属性，有横杠的改成驼峰式，比如：“font-size”，改成”style.fontSize”
    
## 5. js函数 
- 函数使用function来声明(python中是define)
    function fnChange(){
            alert('hello world!');
        } 
    - ()可以传入参数
    - 函数功能代码放在{}里面,不同语句使用分号；断开
    - 缩进没有要求，但是写上缩进便于代码规范阅读
    
    
- 变量与函数预解析 
    JavaScript解析过程分为两个阶段，先是编译阶段，然后执行阶段，
    在编译阶段会将function定义的函数提前，并且将var定义的变量声明提前，
    将它赋值为undefined。
    注意区别：
        - 变量只预解析变量声明，但是不会赋实际值，赋值是undefined
        - 函数预解析声明和函数定义都会提前，因此可以直接使用函数的功能

- 提取行间事件
    本来在html行间调用的js事件可以提取到javascript中调用，从而做到结构与行为分离。 
    js代码都放在script标签里面
    
-  匿名函数
    定义的函数可以不给名称，这个叫做匿名函数，类似python中lambda匿名表达式
    可以将匿名函数直接赋值给元素绑定的事件来完成匿名函数的调用。
    
- 函数'return'关键字
    函数中'return'关键字的作用：
    1、返回函数执行的结果
    2、结束函数的运行
    3、阻止默认行为 

- 参考实例

## 6. js条件语句
- 通过条件来控制程序的走向，就需要用到条件语句
    运算符
    1、算术运算符： +(加)、 -(减)、 *(乘)、 /(除)、 %(求余)
    2、赋值运算符：=、 +=、 -=、 *=、 /=、 、++（自己上面加1，参考赋值实例）
    3、条件运算符：==、===、>、>=、<、<=、!=、!==、&&(而且)、||(或者)、!(否) 
                  ==默认会把不同类型转换为相同的类型，然后再比较
                    如果一个字符串‘2’和数字2,==就会判断为true
                  ===等效于==,但是不会转换类型，修正==的bug
                  !=和!==也是一样
                  因此，推荐多加一个等号，pycharm中==会给语法提示

- 条件语句
    if -----
    else -----
    
- 多重条件语句
    if -----
    else if -----
    else if -----
    else -----
    
- switch语句
    多重if else语句可以换成性能更高的switch语句 
    
## 7. js的数组
- 数组就是一组数据的集合，javascript中，数组里面的数据可以是不同类型的。
- 类似python的列表，其中大多数方法和python中也相同，少数不一样

- 定义数组的方法
    //对象的实例创建
    var aList = new Array(1,2,3);
    
    //直接量创建（推荐）
    var aList2 = [1,2,3,'asd'];
    
- 操作数组中数据的方法
    1、获取数组的长度：aList.length;
    var aList = [1,2,3,4];
    alert(aList.length); // 弹出4
    
    2、用下标操作数组的某个数据：aList[0];
    var aList = [1,2,3,4];
    alert(aList[0]); // 弹出1
    
    3、join() 将数组成员通过一个分隔符合并成字符串
    var aList = [1,2,3,4];
    alert(aList.join('-')); // 弹出 1-2-3-4
    alert(aList); // 弹出1,2,3,4
    注意：数组的其它操作都会改变原始数组，但是join返回一个字符串，原始数组不变
    
    4、push() 和 pop() 从数组最后增加成员或删除成员
    var aList = [1,2,3,4];
    aList.push(5);
    alert(aList); //弹出1,2,3,4,5
    aList.pop();
    alert(aList); // 弹出1,2,3,4
    
    5、unshift()和 shift() 从数组前面增加成员或删除成员
    var aList = [1,2,3,4];
    aList.unshift(5);
    alert(aList); //弹出5,1,2,3,4
    aList.shift();
    alert(aList); // 弹出1,2,3,4
    
    6、reverse() 将数组反转
    var aList = [1,2,3,4];
    aList.reverse();
    alert(aList);  // 弹出4,3,2,1
    
    7、indexOf() 返回数组中元素第一次出现的索引值(利用该属性可以去除掉重复的元素)
    var aList = [1,2,3,4,1,3,4];
    alert(aList.indexOf(1));
    
    8、splice() 在数组中增加或删除成员
    var aList = [1,2,3,4];
    aList.splice(2,1,7,8,9); //从第2个元素开始，删除1个元素，然后在此位置增加'7,8,9'三个元素
    alert(aList); //弹出 1,2,7,8,9,4
    
    

-  多维数组
    多维数组指的是数组的成员也是数组的数组。
    var aList = [[1,2,3],['a','b','c']];
    alert(aList[0][1]); //弹出2;
    批量操作数组中的数据，需要用到循环语句 
    
    var aList = [[1,2,3],['a','b','c'],[4,5,6]];

        alert(aList[0].length); //第一行的长度3
        alert(aList[2].length); //第一行的长度3

        /*通过行列取出元素，类似numpy中数组*/
        /*也可以把大元素看成第一个坐标，大元素中的元素看做第二个坐标*/
        alert(aList[0][0]); //弹出1
        alert(aList[1][1]); //弹出b
        alert(aList[2][2]); //弹出6   
        
## 8. 循环语句
-  for循环
    for(var i=0;i<len;i++)
    {
        ......
    }

- while循环 
    var i=0;
    while(i<8){
        ......
        i++;
    }
    
## 9. 获取元素方法2，使用标签名
- 可以使用内置对象document上的getElementsByTagName方法来获取页面上的某一种标签，
    获取的是一个选择集，不是数组，但是可以用下标的方式操作选择集里面的标签元素。
     - 参考001文件夹中008案例   
     
     
## 10. 字符串处理
- 字符串转换及处理

    1、字符串合并操作：“ + ”
        var iNum01 = 12;
        var iNum02 = 24;
        var sNum03 = '12';
        var sTr = 'abc';
        alert(iNum01+iNum02);  //弹出36
        alert(iNum01+sNum03);  //弹出1212 数字和字符串相加等同于字符串相加
        alert(sNum03+sTr);     // 弹出12abc

    2、parseInt() 将数字字符串转化为整数
        var sNum01 = '12';
        var sNum02 = '24';
        var sNum03 = '12.32';
        alert(sNum01+sNum02);  //弹出1224
        alert(parseInt(sNum01)+parseInt(sNum02))  //弹出36
        alert(sNum03)   //弹出数字12 将字符串小数转化为数字整数

    3、parseFloat() 将数字字符串转化为小数
        var sNum03 = '12.32'
        alert(parseFloat(sNum03));  //弹出 12.32 将字符串小数转化为数字小数
        
    4、split() 把一个字符串分隔成字符串组成的数组
        var sTr = '2017-4-22';
        var aRr = sTr.split("-");
        var aRr2= sTr.split("");
    
        alert(aRr);  //弹出['2017','4','2']
        alert(aRr2);  //弹出['2','0','1','7','-','4','-','2','2']
    
    5、charAt() 获取字符串中的某一个字符
        var sId = "#div1";
        var sTr = sId.charAt(0);
        alert(sTr); //弹出 #
    
    6、indexOf() 查找字符串是否含有某字符
        var sTr = "abcdefgh";
        var iNum = sTr.indexOf("c");
        alert(iNum); //弹出2 弹出的是字符串对应的索引值，不存在就是弹出-1
    
    7、substring() 截取字符串 用法： substring(start,end)（不包括end）
        var sTr = "abcdefghijkl";
        var sTr2 = sTr.substring(3,5);
        var sTr3 = sTr.substring(1);
    
        alert(sTr2); //弹出 de
        alert(sTr3); //弹出 bcdefghijkl
    
    8、toUpperCase() 字符串转大写
        var sTr = "abcdef";
        var sTr2 = sTr.toUpperCase();
        alert(sTr2); //弹出ABCDEF
    
    9、toLowerCase() 字符串转小写
        var sTr = "ABCDEF";
        var sTr2 = sTr.toLowerCase();
        alert(sTr2); //弹出abcdef
           