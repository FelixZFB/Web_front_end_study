## Web前端笔记 ##


### 第一部分：HTML学习
### 第二部分：css学习
### 第三部分：PS学习
### 第四部分：HTML5与CSS3_首页布局
### 第五部分：移动端页面开发
### 第六部分：JavaScript(原生)  
### 第七部分：jQuery
### 第八部分：jQuery_web_动态首页
### 第九部分：js服务器环境
### 第十部分：json_ajax_cookie_webStorage_jqueryUI
### 第十一部分：js移动端库和框架bootstrap


### 学习笔记：每个文件夹中的000文件
### bug说明：每个文件夹中的MD文件，由于内容中涉及到大量的html标签，
### GITHUB(前台)显示的内容和后台不一致,建议下载项目后本地的Pycharm软件中打开查看MD文件


### 实用技巧总结

### 页面整体布局步骤：
- 由上往下依次布置
- 先整体在局部

### 1. 两个a标签中的img标签，图片垂直排列后会产生1px的间隔bug
- 将img转换成块模块即可消除间隔
    <div class="advs fl">
        <a href="#"><img src="images/adv01.jpg" alt="广告图片"></a>
        <a href="#"><img src="images/adv02.jpg" alt="广告图片"></a>
    </div>
    
    img{
        display: block;
    }
    
### 2. 向左移动，隐藏溢出元素
- 多个水平排列的盒子，只显示盒子之间的边框，可以都单独设置显示左边框
    最左边的盒子会多一个边框，整体设置向左移动一个像素，margin-left: -1px;
    然后父级元素，设置over：flow，就可以隐藏最左边的边框
    
### 3. 网页整体设置字体和大小
- 网页中文字都是微软雅黑，直接body设置，后面的标签都可以直接继承字体和大小
    body{
        font-family: "Microsoft YaHei";
        font-size: 14px;
    }

### 4. 布局时候先整体布置，并给背景色，便于调整观察，样式编写完成后，注释掉背景色

### 5. 默认input会带一个边框，去掉外边框，border: 0; 

### 6. 子标签的不设置高度和宽度，高度由内容撑开，宽度默认就是父级的宽度，
- 父级是body就是默认浏览器窗口的宽度
    一般整体布局时候，body下的div都会给定宽度，一般整体宽度是1200px，
    高度不给，子级单独给定高度和宽度，
    li或div标签下的a标签不用给宽度和高度，默认就是li/div标签的盒子大小，
    a下面放的有img图片，整个img图片就是a标签的内容，
    鼠标放上图片后整体都会相应

### 7. 鼠标放在input输入框，边框会突出显示，outline: none; /*去掉获得焦点时候显示的突出边框*/

### 8. 子元素是内联元素，父元素可以用text-align属性设置子元素水平对齐方式
- 内联元素直接设置text-align无效，上面方法可以水平居中，
- 实际开发先display也可以转换为块元素，然后text-align：center

### 9. 解决内联元素(inline)换行后和行内块元素(inline-block)的元素间隙的方法
- 去掉内联元素之间的换行(代码书写时候的换行，不是强制换行br)
- 将内联元素的父级设置font-size为0，子级元素自身再设置font-size

### 10. 圆圈，直接用方块倒圆角 
- border-radius: 50%; /*方块直接倒成圆角，半径给边长的一半*/

### 11. 鼠标由箭头变成手的形状
- cursor: pointer; /*鼠标箭头变成手的形状*/

### 12. 浮动注意
- 浮动元素后面不浮动的元素，会占据浮动元素的位置，浮动元素并没有占据文档流的位置
- 但是后面未浮动元素还是会从浮动元素右边开始排列（036参考文字绕图效果）

- 一个大盒子中的小盒子最好同时给定浮动，可以左浮动也可以有浮动，
    比如一个大盒子有三个小盒子，第一个和第二个左浮动，第二个在给定margin就可以放在中间
    最后一个盒子给定右浮动，就可以靠右
- 如果，大盒子中的有一个小盒子没有给定浮动，小盒子就会从大盒子左上角开始排列，占据一行，因为浮动的盒子并没有占据文档流的位置
- 给定浮动的小盒子，如果也是靠近左上角，会浮动在为给定浮动盒子的上层，会形成覆盖
    参考04-web中index.html  <!--logo、搜索框、购物车-->部分，如果删除搜索框的fl左浮动，
    搜索框就会跑到左上角，但是由于不是浮动元素，搜索框出现了margin-top塌陷，上边距设置不会生效
- 浮动不能继承父级的浮动，比如li是一个块元素，需要自己设置自己的浮动，上级ul给定了浮动，但是并不会影响下面的li

### 13. img标签自适应大小
- img图片大小不一定，有时候使用的是div容器的几倍图，
- 大小会超出盒子，超出部分倍裁切了不会显示
- 父元素div设置的宽度（固定宽度或者百分比都可以），img设置宽度为100%，
- img会自动适应父级宽度，图片宽度高度自动缩放
- 一般都是div a img a标签可以不用设置宽度都是由img撑开的
- 如果设置a为100%，img不设置，此时高度还是由图片撑开，宽度超出的还是会被裁切掉
- 参考05文件夹中web-rem商品图片样式
    /*商品图片*/
    .goods_list li a img{
        width: 100%; /*图片大小大于盒子了，设置图片宽度为100%,就会自动缩放*/
    }

### 14. rem布局注意
- 选定一个移动设备作为基准，图片一般使用2倍图或者3倍图
- 盒子尺寸直接按照设备大小进行布置，和浏览器布局一样
- img图片设置父级宽度，img宽度100%,会自动适应按比例缩放
- 背景图使用2倍图或者3倍图，使用background-size设置成需要的大小，强制缩小图片

### 15. 文字一行显示，多出部分显示省略号
- 样式中加上以下3句即可：
    /*文字不换行，超出盒子部分省略号显示，以下三步实现*/
    overflow: hidden;
    /*强制文字不换行*/
    white-space: nowrap;
    /*超出部分显示省略号*/
    text-overflow: ellipsis;
    
### 16. css3和jquery中动画对比
- 动画本质一样，都是两个状态之间切换的效果
- css3中需要定义from起始状态到to终点状态，然后设置过渡动画效果
- jQuery本身的css样式就是起始状态，只需要在函数中定义终点状态和动画效果
- 参考04文件夹中的007和07文件夹中的013对比

### 17. a标签的href属性
- 使用#和javascript:;的区别
    <a href="#">使用#会连接跳转到顶部</a>
    <a href="javascript:;">javascript:;是一个空语句，什么都不做，也不会跳转到顶部，但是可以保持连接的样式</a>

### 18. jQuery中的return注意
- return注意
    // 注意函数内部使用return的函数，一般放在函数内部的前面，不要放在后面，会出现bug
    // 上面前两个特殊情况，都使用了return跳出函数，放在最后，还是会出现空背景色
    // 最后一个函数，返回的是空值，函数什么都不做，放这里没有问题
    - 参考07文件夹中天天生鲜动态首页，js中的slide_user.js的moving函数

### 19. css 原生js jquery中关于样式书写区别
- css
    样式名称和值都不需要引号
    .box{
        width: 200px; 
        height: 200px;
        font-size: 32px;
    }
    
- 原生js中
    样式的值要使用引号,修改样式使用style
    oDiv1.style.color = 'red';
    oDiv1.style.fontSize = '32px';   // 短横线写成匈牙利命名法 
    
- jquery中
    - 样式写在字典里面，键值方式，修改样式使用css
    - jquery有容错机制
    - 样式名称可以使用短横线(css中原始写法)也可以写成匈牙利命名(原生js中写法)    
    - 宽度高度等数字后面的px可以省略，不写px就不写引号，要写px就要加上引号
    - 推荐写上px，都使用引号
    $('.box').css({'color':'red'});
    $('.list li').css({'color':'yellow', 'background-color':'green'});  // 短横线直接写成css一样，也可以写成原生js中匈牙利命名法
    $('.box').animate({'width':'+=100px'})
    
    
### 20. 原生JS和jQuery中一些语法区别
- 加载模块
    - 原生js
        window.onload = function () {
            var oDiv = document.getElementById('div1');
            alert('原生JS弹出的' + oDiv);
        }
    
    - jQuery
        $(function () {
            var $div = $('#div1');
            alert('jquery简写弹出的' + $div);
        })
- 点击
    // 点击元素执行的功能,原生js使用的是onclick
    // 注意写法不同，匿名函数写在等号右边，jQuery写在click括号里面
    // 原生js: oBtn.onclick = function(){oDiv.style.color = 'red';}
    // jQuery：$('#btn').click(function () {}
    
- 获取属性
    - 原生js
        - css样式属性获取和设置
            oDiv1.style.color;
            oDiv1.style.fontSize = '32px';
        - 标签元素的属性获取和设置
            oLink.href;
            oLink.href = 'http://www.baidu.com';
            oLink.title = '点击跳转到百度首页';

    - jQuery
        - css样式属性获取和设置
            $div1.css('font-size');
            $div1.css({'color':'red'});
        - 标签元素的属性获取和设置
            $a.prop('class');
            $a.prop({'href':'http://www.hao123.com','title':'hao123首页'});
            
- 标签内的内容
    - 原生js
        oDiv.innerHTML;
        oDiv.innerHTML = "<a href='http://www.baidu.com'>百度首页</a>";
    - jQuery
        $('.box').html();
        $('.box').html('<a href='http://www.baidu.com'>百度首页</a>');
        
### 21.   