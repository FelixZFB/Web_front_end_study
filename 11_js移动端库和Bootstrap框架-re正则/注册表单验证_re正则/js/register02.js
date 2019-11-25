$(function(){

	/*验证用户名是否符合规则*/

	/*获取用户名*/
	var $username = $('#user_name');

	/*blur失去焦点的时候，调用函数，就检查用户名是否符合*/
	$username.blur(function(){
		check_username();
	});

	/**/
	$username.click(function(){
		$(this).next().hide();
	});

	function check_username(){

		var val = $username.val();
		var re = /^\w{6,20}$/;

		/*如果用户名为空的时候，显示输入框下面的提示信息*/
		if(val==='')	{
			/*.next()即input后面的span标签*/
			$username.next().html('用户名不能为空');
			$username.next().show(); /*显示出该标签，默认是隐藏的*/
			return;
		}

		/*验证用户名师傅符合规则，符合是true，否则就执行else*/
		if(re.test(val))
		{
			$username.next().hide(); /*符合要求隐藏提示*/
		}
		else /*不符合弹出用户名规则提示信息*/
		{
			$username.next().html('用户名是6到20位的数字、字母或下画线');
			$username.next().show();
		}

	}



})