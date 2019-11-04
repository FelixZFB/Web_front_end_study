HTML快速创建，配合tab键使用
- table>tr>td*4 一个表格，一行四列

- table>(tr>td*5)*6 一个表格下面创建5列6行的表格

- ul.menu>(li>a{公司简介})*7
    <ul class="menu">
        <li><a href="">公司简介</a></li>
        <li><a href="">公司简介</a></li>
        <li><a href="">公司简介</a></li>
        <li><a href="">公司简介</a></li>
        <li><a href="">公司简介</a></li>
        <li><a href="">公司简介</a></li>
        <li><a href="">公司简介</a></li>
    </ul>

- ul.list>li{$}*8
    <ul class="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
    </ul>
    
- ul.list>(li{美人鱼})*5 (li外面的圆括号可以省略)
    <ul class="list">
        <li>美人鱼</li>
        <li>美人鱼</li>
        <li>美人鱼</li>
        <li>美人鱼</li>
        <li>美人鱼</li>
    </ul>
    
- ul.footer>(li>(a+h2{首页}))*4
    <ul class="footer">
        <li>
            <a href=""></a>
            <h2>首页</h2>
        </li>
        <li>
            <a href=""></a>
            <h2>首页</h2>
        </li>
        <li>
            <a href=""></a>
            <h2>首页</h2>
        </li>
        <li>
            <a href=""></a>
            <h2>首页</h2>
        </li>
    </ul>