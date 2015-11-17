$(window).load(function() {
	console.log('load');
	$('#name').mouseover(function() {
	  console.log('hoverOn');
	  $('#name').css('font-style', 'italic').html('Shay-na Who?')
	});

	$('#name').mouseout(function() {
	  console.log('hoverOff');
	  $('#name').css('font-style', 'normal').html('Shana Hu')
	});
})