var $window=$(window);$(document).ready(function(){$(".animate-redirect a[href^='#']").click(function(o){o.preventDefault();o=$($(this).attr("href")).offset().top;$("body, html").animate({scrollTop:o},1e3)}),$window.on("scroll",function(){500<$(this).scrollTop()?$(".scroll-to-top").fadeIn(400):$(".scroll-to-top").fadeOut(400)}),$(".scroll-to-top").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},600)})});var wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0});wow.init();