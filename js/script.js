$(document).ready(function() {
	particlesJS.load('particles', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	$("#main-content").addClass('animated fadeIn');
	$("#main-content hr").addClass('animated fadeInLeft');
	$("#main-content p").addClass('animated fadeInUp');
	$("#main h1, h3").addClass('animated fadeInDown');

	$("#tech").addClass('animated fadeInLeft');
	$("#projects").addClass('animated fadeInLeft');
	$("#social-media").addClass('animated fadeInLeft');
});