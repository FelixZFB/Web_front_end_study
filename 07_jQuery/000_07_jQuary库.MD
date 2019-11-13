## Web前端学习笔记 ##


## 第七部分：jQuery


## 1. jQuery介绍
- jQuery是目前使用最广泛的javascript函数库。
    据统计，全世界排名前100万的网站，有46%使用jQuery，远远超过其他库。
    微软公司甚至把jQuery作为他们的官方库。
    
    jQuery的版本分为1.x系列和2.x、3.x系列，1.x系列兼容低版本的浏览器，
    2.x、3.x系列放弃支持低版本浏览器，目前使用最多的是1.x系列的。
    
    jquery是一个函数库，一个js文件，页面用script标签引入这个js文件就可以使用。
    <script type="text/javascript" src="js/jquery-1.12.2.js"></script>

- jquery的口号和愿望 Write Less, Do More（写得少，做得多）
    1、http://jquery.com/ 官方网站
    2、https://code.jquery.com/ 版本下载



## 2. jQuery和原生js加载模块写法区别
- 原生js写法：
        window.onload = function () {
            var oDiv = document.getElementById('div1');
            alert('原生JS弹出的' + oDiv);
        }

- jquery完整写法：
        /*使用jquery的写法，$(document).ready相当于上面的window.onload*/
        /*表示当前页面节点都加载完毕，才执行ready括号里面的内容*/
        $(document).ready(function () {
            var $div = $('#div1');
            alert('jquery弹出的' + $div); /*jquery写在后面但是弹出来在前面，速度更快*/
        })
        
- jquery简写：
        /*jquery上面ready完整写法的简写,$(document).ready()简写为$()*/
        $(function () {
            var $div = $('#div1');
            alert('jquery简写弹出的' + $div);
        })

- /*ready比onload快的原因：*/
        /*onload标签和标签里面数据都加载完毕(类似于网页渲染)才开始运行内部函数，*/
        /*ready只要标签加载完毕就开始运行了，速度更快*/