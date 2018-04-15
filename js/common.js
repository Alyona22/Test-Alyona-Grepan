$(document).ready(function(){
	var d = new Date(),
			month = new Array("января","февраля","марта","апреля","мая","июня",
												"июля","августа","сентября","октября","ноября","декабря"),
			day = d.getDate(),
			dateNow = day + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
	// like = $(".reviews__quantity--likes").html();
	$(".new-comment__message").keydown(function(e){
		if(e.ctrlKey && e.keyCode == 13) {
			var comment = $(".new-comment__message").val(),
					author = prompt("Введите Ваше имя"),
					quantity = $(".reviews__quantity--comments").html();
			if (comment == "") {
				$(".new-comment__message").css("border", "1px red solid");
			} else {
				$("<div class='comments'><h3 class='comments__title'> "+ author +" <span class='comments__date'>" + dateNow + "</span></h3><p class='comments__text'><span class='comments__triangle'></span>" + comment + "</p></div>").appendTo(".comments-wrap").hide().slideDown(300);
				$(".new-comment__message").css("border", "1px solid #a9a9a9").val("");
				$(".reviews__quantity--comments").html(+quantity + 1);
			}}
		});
		$(".new-comment__btn").click(function(){
			var comment = $(".new-comment__message").val(),
					author = prompt("Введите Ваше имя"),
					quantity = $(".reviews__quantity--comments").html();
			if (comment == "") {
				$(".new-comment__message").css("border", "1px red solid");
			} else {
				$("<div class='comments'><h3 class='comments__title'> "+ author +" <span class='comments__date'>" + dateNow + "</span></h3><p class='comments__text'><span class='comments__triangle'></span>" + comment + "</p></div>").appendTo(".comments-wrap").hide().slideDown(300);
				$(".new-comment__message").css("border", "1px solid #a9a9a9").val("");
				$(".reviews__quantity--comments").html(+quantity + 1);
			}
		});
		$(".item-services__quantity").spincrement({
			duration: 3000
		});			
		var like = $(".reviews__quantity--likes").html();
		for (var i = like; i>1000; i++) {
			$(".reviews__quantity--likes").html();
		}
		$(".reviews__likes").click(function() {
			$(".reviews__quantity--likes").html(i++);
		});	
	});