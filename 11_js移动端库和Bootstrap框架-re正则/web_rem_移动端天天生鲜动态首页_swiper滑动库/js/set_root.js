(function(){
	var calc = function(){
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		docElement.style.fontSize = 10*(clientWidthValue/375) + 'px'; /*设置默认的字体为10px*/
	}
	calc();
	window.addEventListener('resize',calc);
})();