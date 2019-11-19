/*Felix用户自己写的js,静态和动态是课件自带的*/

$(function () {

    var $li = $('.slide_list li'); // 获取幻灯片的每个图片的li标签
    var $nowli = 0; // 即将要展示出来的幻灯片索引值
    var $prevli = 0; // 即将离开不展示的幻灯片索引值
    var $len = $li.length; // 获取li标签的个数，即幻灯片图片的数量
    var $points_con = $('.points'); // 图片下面小圆点的ul标签，即小圆点的容器
    var $prev = $('.prev'); // 左边小箭头
    var $next = $('.next'); // 右边小箭头


    // 动态加入幻灯片下面的小圆点
    for(var i=0;i<$len;i++){        // 使用for循环添加图片数量对应的小圆点元素
        var $newli = $('<li>');     // 创建一个li标签
        if(i===0){
            $newli.addClass('active'); // 添加的第一个小圆点显示为激活的样式，打开时候显示第一张图片
        }
        $newli.appendTo($points_con);      // 加入小圆点到小圆点的ul标签里面，依次添加在末尾
    }

    var $points = $('.points li');  // 获取每一个小圆点，上面先添加了才能获取到


    // 第一个幻灯片不动，其它幻灯片都放到右边去，也可以放到左边去
    $li.not(':first').css({'left':760}); // not(':first')表示除了第一个元素以外，left值设置成-760，放在左边隐藏着,也可以设置成760px，即放到右边去



    // 点击小圆点，切换幻灯片,小圆点和图片的索引值是相同的，都是0 1 2 3
    $points.click(function () {
        $nowli = $(this).index(); // 点击那个小圆点级对应图片的索引值，即要显示出来的幻灯片
        $(this).addClass('active').siblings().removeClass('active'); // 点击小圆点，该小圆点激活，其它的被不激活
        moving(); // 幻灯片移动的函数
    })


    // 点击左右箭头，移动幻灯片
    // 点击左边小箭头，向左移动幻灯片,右边幻灯片向左移动
    // 进来的时候$nowli是0
    $prev.click(function () {
        $nowli--;
        moving();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    })

    // 点击右边的小箭头，向右移动幻灯片，左边幻灯片向右移动
    $next.click(function () {
        $nowli++;
        moving();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    })


    // 幻灯片的运动函数
    // 打开网页时候，$prevli的值是0，点击一个图片后，图片切换完后，$prevli被赋值为当前已经显示的$nowli
    function moving() {

        // 初始状态，第1张幻灯片在展示位置，其它3张都在右边760px位置，对应index是0 1 2 3
        // 如果点击要显示的幻灯片的索引值大于当前正在显示的，将其left值先修改为760然后改成0，就形成了从右边到左边的滑入动画
        // 正在显示的这张，本来left就是0，改成-760，就向左边移走了当前展示的这张幻灯片
        // 点击右边的小圆点的情况，图片从右边滑动进来
        if($nowli>$prevli){
            $li.eq($nowli).css({'left':760});
            $li.eq($nowli).animate({'left':0});
            $li.eq($prevli).animate({'left':-760});
            $prevli = $nowli; // 当前显示图片的的索引值赋值给$prevli，当前的幻灯片就是下次的要移走的幻灯片
        }

        // 当前显示的右边的图片，点击显示左边的图片
        // 当前显示的图片移动到右边去，要显示出来的图片从左边移入进来
        // 点击左边的小圆点的情况，图片从左边滑动进来
        if($nowli<$prevli){
            $li.eq($nowli).css({'left':-760});
            $li.eq($nowli).animate({'left':0});
            $li.eq($prevli).animate({'left':760});
            $prevli = $nowli;  // 当前显示图片的的索引值赋值给$prevli，当前的幻灯片就是下次的要移走的幻灯片
        }

        // 如果值相同，就是点击同一个小圆点，什么都不做，跳出该函数
        if($nowli===$prevli){
            return;
        }

        // 两种左右移动到边界的特殊情况，左右移动时候，有两种极限情况：
        // 第一张向左边点击，$nowli--会出现负值
        // 第四张向右边点击，对应的索引值$nowli已经是3，$nowli++就是4
        // 索引不应该出现负值，还有索引值为4已经没有图片了，就显示的背景色
        // 点击第一张时候，先把第四张变成第一张，即初始值$nowli=3
        // 点击最后，再次点击就切换到第一张去，$nowli变成0
        if($nowli<0){
            $nowli = $len-1; // 即初始值是3，点击到最左边后，又切换到最后一张,第四张图片从左边滑动进来，开始新的循环
            $prevli = 0; // 之前显示的第一张
            $li.eq($nowli).css({'left':-760});
            $li.eq($nowli).animate({'left':0});
            $li.eq($prevli).animate({'left':760});
            $prevli = $nowli; // 将当前显示的$prevli赋值为3，然后再点击向左，3向下减减，下次点击左箭头，$nowli就变成3-- = 2
            return; // 两种极限情况，执行完了就就跳出函数，再次点击时候，根据去寻找适合自己的函数进行执行下一次点击
            // 该函数执行的是一种特殊情况，执行完后，要跳出函数，该函数执行后，幻灯片发生了切换，
            // 相当于返回了新的$prevli和$nowli值，然后再次点击根据新的值选择要执行的moving函数，如果不return一直会在函数里面出不去
            // 再次点击还是会出现背景色
        }

        if($nowli>$len-1){
            $nowli = 0; // 即初始值是0，点击到最右边后，又切换回到第一张，第一张图片从右边滑动进来，开始新循环
            $prevli = $len-1; // 之前显示的是最后一张
            $li.eq($nowli).css({'left':760});
            $li.eq($nowli).animate({'left':0});
            $li.eq($prevli).animate({'left':-760});
            $prevli = $nowli;
            return; // 两种极限情况，执行完了就就跳出函数，去寻找适合自己的函数进行执行下一次点击
        }

    }



})