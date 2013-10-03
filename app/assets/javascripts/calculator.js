// console.log('loaded');

$(window).load(function(){
	$('#slides').cycle('fade');
});

// Calculator

$(".button").click(function () {
	//Equiptment Cost
	z= $('#tons').val()/15*1000000;
	document.getElementById("equipment_cost").innerHTML=z;
	//Equipment Installation
	y= $('#tons').val()/15*1000000;
	document.getElementById("equipment_install").innerHTML=y;
	//total cost output
	x= $('#tons').val()/15*2000000;
	document.getElementById("total_cost").innerHTML=x;
	//litres Diesel Output
	l= $('#tons').val()*400
	document.getElementById("liters_petro").innerHTML=l;
	//Gallons of Diesel Output
	g= $('#tons').val()*105
	document.getElementById("gallons_petro").innerHTML=g;
	//Kg Carbon Char Output
	c= $('#tons').val()*330
	document.getElementById("kg_carbon").innerHTML=c;
	//Kg Steelwire Output
	s= $('#tons').val()*110
	document.getElementById("kg_steel").innerHTML=s;
	//Kg Methane Gas Output
	m= $('#tons').val()*110
	document.getElementById("kg_methane").innerHTML=m;
	//Kg Fiber Output
	f= $('#tons').val()*23
	document.getElementById("kg_carbon_fiber").innerHTML=f;
	//console.log($('#tons').val());
});

// Feed Stock Photos -> On Mouse Over change the Opacity of the image

$(function() {
            $('.bottom_photos_top_row img').animate({"opacity": .4 });

            $('.bottom_photos_top_row img').hover(function() {
                $(this).stop().animate({ "opacity": 1 });
            }, function() {
                $(this).stop().animate({ "opacity": .5 });
            });
        });

$(function() {
            $('.bottom_photos_bottom_row img').animate({"opacity": .4 });

            $('.bottom_photos_bottom_row img').hover(function() {
                $(this).stop().animate({ "opacity": 1 });
            }, function() {
                $(this).stop().animate({ "opacity": .5 });
            });
        });

// Calculator

$(function() {
            $('.bottom_container div').animate({"opacity": .5 });

            $('.bottom_container div').hover(function() {
                $(this).stop().animate({ "opacity": 1 });
            }, function() {
                $(this).stop().animate({ "opacity": .5 });
            });
        });

// Map -> Fade in on Load

$(document).ready(function() {
	$('.right_container_bottom_map_contact').hide(0).delay(500).fadeIn(2000)
});



