$(document).ready(function(){
	var d = new Date();
	var month = new Array("января","февраля","марта","апреля","мая","июня",
	"июля","августа","сентября","октября","ноября","декабря");
	var day = d.getDate();
	var dateNow = day + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
	$(".new-comment__message").keydown(function(e){
		if(e.ctrlKey && e.keyCode == 13) {
			var comment = $(".new-comment__message").val();
			var author = prompt("Введите Ваше имя");
			if (comment == "") {
				$(".new-comment__message").css("border", "1px red solid");
			} else {
				$("<div class='comments'><h3 class='comments__title'> "+ author +" <span class='comments__date'>" + dateNow + "</span></h3><p class='comments__text'><span class='comments__triangle'></span>" + comment + "</p></div>").appendTo(".comments-wrap");
				$(".new-comment__message").css("border", "1px solid #a9a9a9");
			}}
		});
		$(".new-comment__btn").click(function(){
			var comment = $(".new-comment__message").val();
			var author = prompt("Введите Ваше имя");
			if (comment == "") {
				$(".new-comment__message").css("border", "1px red solid");
			} else {
				$("<div class='comments'><h3 class='comments__title'>"+ author +"<span class='comments__date'>" + dateNow + "</span></h3><p class='comments__text'><span class='comments__triangle'></span>" + comment + "</p></div>").appendTo(".comments-wrap");
				$(".new-comment__message").css("border", "1px solid #a9a9a9");
			}
		});
	});