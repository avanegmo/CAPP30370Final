$(document).ready(function(){
	console.log( 'Width: ' + $(window).width() );
  });
  
$(window).resize(function(){
	console.log( 'Width: ' + $(window).width() );
  }); 
 
  $('nav li').hover(function(){
    $(this).css({"background": "#99FFFF"});
  },function(){ 
  $(this).css({"background": "white"});
}); 

  
$('.pic').click(function() {
    console.log($(this).attr('alt')); 
    console.log('Width:' + $(this).width() ); 
    console.log('Height:' + $(this).height() ); 
   });

 $('h1, h2, h3, h4, h5, h6').click(function (e) {
 	e.preventDefault();
  	console.log('Header:' + $(this).text());
  	console.log('Color:' + $(this).css("color"));
  	console.log('Font-size:' + $(this).css("font-size"));
  	}); 

