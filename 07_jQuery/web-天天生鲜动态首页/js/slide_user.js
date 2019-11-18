/*Felix用户自己写的js,静态和动态是课件自带的*/

$(function () {

    var $li = $('.slide_list li'); // 获取幻灯片的每个图片的li标签
    var $len = $li.length; // 获取li标签的个数，即幻灯片图片的数量
    var $points = $('.points') // 图片下面小圆点的ul标签，即小圆点的容器

    $li.not(':first').css({'left':-760}); // not(':first')表示除了第一个元素以外，left值设置成-760，放在左边隐藏着,也可以设置成760px，即放到右边去

    // 动态加入幻灯片下面的小圆点
    for(var i=0;i<$len;i++){        // 使用for循环添加图片数量对应的小圆点元素
        var $newli = $('<li>')      // 创建一个li标签
        if(i===0){
            $newli.addClass('active'); // 添加小圆点显示为激活的样式
        }
        $newli.appendTo($points);      // 加入小圆点到小圆点的ul标签里面，依次添加在末尾
    }





})