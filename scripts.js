$(document).ready(function(){
	$("#form").on('submit', function(event){
		var text = $("#content").val();
		event.preventDefault();
		$(".list").prepend(
			'<div class="tweet">'
			+'<div class="cross"></div>'
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

	$('.list').on('click', '.cross', function(){
		$(this).parent().fadeOut(500);
	})

	$('.list').on('click', '.likeable', function(){
		$(this).find('.glyphicon').css('color', '#F7819F')
	})

	$('.list').on('click', '.heart', function(){
		$(this).find('#counter').html(function(i, val){
			return val * 1 + 1
		})
	})

})
