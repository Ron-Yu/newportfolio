$(function(){function e(){var e=$(window).scrollTop(),o=$(window).height(),i=$("#about").offset().top,n=$("#skill").offset().top;e>=i&&n-o>=e?$("#about .image-show").addClass("fixed").removeClass("finishFixed"):e>n-o?$("#about .image-show").removeClass("fixed").addClass("finishFixed"):$("#about .image-show").removeClass("fixed").removeClass("finishFixed")}function o(){$(".circle").circleProgress({value:.7,size:150,startAngle:5,thickness:10,lineCap:"round",animation:{duration:3e3},fill:{gradient:["red","orange"]}})}var i=$("#m_btn"),n=$("#m_menu"),a=$("#menu"),s=$(window);-1!=navigator.userAgent.indexOf("Firefox")?$("header").animate({"border-spacing":50},{step:function(e,o){$(o.elem).css("background-position","50% "+e+"%")},duration:2e3}):$("header").animate({backgroundPositionY:"50%"},3e3),a.addClass("opened"),a.each(function(){s.on("scroll",$.throttle(1e3/15,function(){s.scrollTop()>80?a.addClass("fixed inverted").removeClass("secondary"):a.removeClass("fixed inverted").addClass("secondary")}))}),$(".menu .item").on("click",function(e){e.preventDefault(),$(".menu .item").removeClass("active"),$(this).addClass("active")}).on("mouseover",function(e){e.preventDefault(),a.hasClass("fixed")&&$(this).css("color","#fff")}),i.on("click",function(){n.sidebar("setting","transition","push").sidebar("toggle")}),s.on("resize",function(){var e=s.width();e>768&&n.sidebar("hide")}),$(".owl-carousel").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:5e3,dots:!0,smartSpeed:1e3,items:1}),function(){var e=$(".slider-nav-control"),o=$(".hover-mask"),i=$(".image-show");i.hover(function(){e.fadeIn("slow"),o.fadeIn("slow"),$(".owl-carousel").trigger("stop.owl.autoplay")},function(){function i(){$(".owl-carousel").trigger("play.owl.autoplay")}e.fadeOut("slow"),o.fadeOut("slow"),setTimeout(i,2e3)})}(),function(){var e=$(".owl-carousel");e.owlCarousel(),$("i.chevron.left.icon").click(function(){e.trigger("prev.owl.carousel")}),$("i.chevron.right.icon").click(function(){e.trigger("next.owl.carousel")})}(),$(window).on("scroll",function(o){o.preventDefault(),e()}),setTimeout(o,2e3)});