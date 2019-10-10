var win = $(window);
/*
 *-*- scroll animacia -*-*
 */
$(document).ready(function(){

	$("a").on('click', function(event) {

	  if (this.hash !== "") {
		event.preventDefault();

		var hash = this.hash;
		$('html,body').animate ({
		  scrollTop: $(hash).offset().top }, 800);
	  }
	});
  });


/*
 * Animácia pre foto
 */
var id1 = $('#id1'),
	id2 = $('#id2'),
	id3 = $('#id3'),
	tma_a =$('.tma_a'),
	tma_b =$('.tma_b'),
	tma_c =$('.tma_c'),
	a = $('.a'),
	b = $('.b'),
	c = $('.c');

//id______1
id1.mouseenter(function() {
	tma_a.css({
		opacity: '.8',
		transition: '.5s',
	});
	a.css({
		transition: '.5s',
		transform: 'scale(1.1)',
	});
});
id1.mouseleave(function() {
	tma_a.css({
		opacity: '.3',
	});
	a.css({
		transform: 'scale(1)',
	});
});
//id_______2
id2.mouseenter(function() {
	tma_b.css({
		opacity: '.8',
		transition: '.5s',
	});
	b.css({
		transition: '.5s',
		transform: 'scale(1.1)',
	});
});
id2.mouseleave(function() {
	tma_b.css({
		opacity: '.3',
	});
	b.css({
		transform: 'scale(1)',
	});
});
// id______3
id3.mouseenter(function() {
	tma_c.css({
		opacity: '.8',
		transition: '.5s',
	});
	c.css({
		transition: '.5s',
		transform: 'scale(1.1)',
	});
});
id3.mouseleave(function() {
	tma_c.css({
		opacity: '.3',
	});
	c.css({
		transform: 'scale(1)',
	});
});
/*
 * ASIDE slide back
 */
var aside = $('#aside');

win.on('scroll', function() {
	if (win.scrollTop() > 1300) {
		aside.css({
			left: '0',
			transition: '.5s',
		});
	}
});
win.on('scroll', function() {
	if (win.scrollTop() < 1100) {
		aside.css({
			left: '-100%',
			transition: '.5s',
		});
	}
});

