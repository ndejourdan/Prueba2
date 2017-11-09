$(document).ready(function(){
	$("#form").on('submit', function(event){
		var text = $("#content").val();
		event.preventDefault();
		$(".list").prepend(
			'<div class="tweet">'
			+'<div class="cross">'
			+'<a href="#" class="remove"><span class="glyphicon glyphicon-remove"></span></a>'
			+'</div>'
			+'<div class="heart">'
			+'<a class="likeable" href="#"><span class="glyphicon glyphicon-heart"></span></a>'
			+'<span id="counter">0</span>'
			+'</div>'
			+ text
			+'</div>'
			+'</div>')
		$("#content").val('');
		$("#content").focus();
			
	});

	$('.list').on('click', '.remove', function(event){
		$(this).parent().parent().fadeOut(500);
		event.preventDefault();
	})

	$('.list').on('click', '.likeable', function(event){
		$(this).find('.glyphicon').css('color', '#F7819F');
		event.preventDefault();
		$(this).parent().find('#counter').html(function(i, val){
			return val * 1 + 1
	});
	});
})

