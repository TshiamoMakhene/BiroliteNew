   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var headerMenu_dropdownToggle = document.querySelectorAll('#headerMenu .dropdown-toggle');
      headerMenu_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var headerMenu_dropdown = document.querySelectorAll('#headerMenu .dropdown');
      headerMenu_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
      var elementwelcome_carousel = document.querySelector('#welcome-carousel');
      elementwelcome_carousel.addEventListener('slid.bs.carousel', function(e)
      {
         switch(e.to)
         {
            case 0:
               AnimateCss('wb_welcome-text1', 'slide-down-in', 500, 1000);
               AnimateCss('wb_welcome-text2', 'slide-up-in', 1000, 1000);
               AnimateCss('welcome-button1', 'slide-up-in', 2000, 1000);
               break;
            case 1:
               AnimateCss('wb_welcome-text3', 'slide-down-in', 500, 1000);
               AnimateCss('wb_welcome-text4', 'slide-up-in', 1000, 1000);
               AnimateCss('welcome-button2', 'slide-up-in', 2000, 1000);
               break;
            case 2:
               AnimateCss('wb_welcome-text5', 'slide-down-in', 500, 1000);
               AnimateCss('wb_welcome-text6', 'slide-up-in', 1000, 1000);
               AnimateCss('welcome-button3', 'slide-up-in', 2000, 1000);
               break;
         }
      });
      var welcome_carousel = new bootstrap.Carousel('#welcome-carousel', {interval: 6000, pause: false});
   });
   
   $(document).ready(function()
   {
      $('#wb_infoBlock2Text').addClass('visibility-hidden');
      $('#wb_Card69').addClass('visibility-hidden');
      $('#wb_Card70').addClass('visibility-hidden');
      $('#wb_Card71').addClass('visibility-hidden');
      $('#wb_Card72').addClass('visibility-hidden');
      $('#wb_Card9').addClass('visibility-hidden');
      $('#wb_Card1').addClass('visibility-hidden');
      $('#wb_Card2').addClass('visibility-hidden');
      $('#wb_Card3').addClass('visibility-hidden');
      $('#wb_Card18').addClass('visibility-hidden');
      $('#wb_Card4').addClass('visibility-hidden');
      $('#wb_Card19').addClass('visibility-hidden');
      $('#wb_Text1').addClass('visibility-hidden');
      $("a[href*='#LayoutGridCarousel']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGridCarousel').offset().top }, 600, 'easeOutCubic');
      });
      $("a[href*='#infoBlock1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock1').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#services').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#testimonials']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#testimonials').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#team']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#team').offset().top }, 600, 'easeOutSine');
      });
      function onScrollinfoBlock2Text()
      {
         var $obj = $("#wb_infoBlock2Text");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_infoBlock2Text', 'transform-scale-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_infoBlock2Text', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_infoBlock2Text').inViewPort(true))
      {
         $('#wb_infoBlock2Text').addClass("in-viewport");
      }
      onScrollinfoBlock2Text();
      $(window).scroll(function(event)
      {
         onScrollinfoBlock2Text();
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      function onScrollCard69()
      {
         var $obj = $("#wb_Card69");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card69', 'animate-fade-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card69', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card69').inViewPort(true))
      {
         $('#wb_Card69').addClass("in-viewport");
      }
      onScrollCard69();
      $(window).scroll(function(event)
      {
         onScrollCard69();
      });
      function onScrollCard70()
      {
         var $obj = $("#wb_Card70");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card70', 'animate-fade-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card70', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card70').inViewPort(true))
      {
         $('#wb_Card70').addClass("in-viewport");
      }
      onScrollCard70();
      $(window).scroll(function(event)
      {
         onScrollCard70();
      });
      function onScrollCard71()
      {
         var $obj = $("#wb_Card71");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card71', 'animate-fade-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card71', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card71').inViewPort(true))
      {
         $('#wb_Card71').addClass("in-viewport");
      }
      onScrollCard71();
      $(window).scroll(function(event)
      {
         onScrollCard71();
      });
      function onScrollCard72()
      {
         var $obj = $("#wb_Card72");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card72', 'animate-fade-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card72', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card72').inViewPort(true))
      {
         $('#wb_Card72').addClass("in-viewport");
      }
      onScrollCard72();
      $(window).scroll(function(event)
      {
         onScrollCard72();
      });
      function onScrollCard9()
      {
         var $obj = $("#wb_Card9");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card9', 'animate-fade-in-left', 600, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card9', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card9').inViewPort(true))
      {
         $('#wb_Card9').addClass("in-viewport");
      }
      onScrollCard9();
      $(window).scroll(function(event)
      {
         onScrollCard9();
      });
      function onScrollCard1()
      {
         var $obj = $("#wb_Card1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card1', 'animate-fade-in-left', 400, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card1').inViewPort(true))
      {
         $('#wb_Card1').addClass("in-viewport");
      }
      onScrollCard1();
      $(window).scroll(function(event)
      {
         onScrollCard1();
      });
      function onScrollCard2()
      {
         var $obj = $("#wb_Card2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card2', 'animate-fade-in-left', 200, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card2').inViewPort(true))
      {
         $('#wb_Card2').addClass("in-viewport");
      }
      onScrollCard2();
      $(window).scroll(function(event)
      {
         onScrollCard2();
      });
      function onScrollCard3()
      {
         var $obj = $("#wb_Card3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card3', 'animate-fade-in-left', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card3').inViewPort(true))
      {
         $('#wb_Card3').addClass("in-viewport");
      }
      onScrollCard3();
      $(window).scroll(function(event)
      {
         onScrollCard3();
      });
      function onScrollCard18()
      {
         var $obj = $("#wb_Card18");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card18', 'animate-fade-in-up', 500, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card18', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card18').inViewPort(true))
      {
         $('#wb_Card18').addClass("in-viewport");
      }
      onScrollCard18();
      $(window).scroll(function(event)
      {
         onScrollCard18();
      });
      function onScrollCard4()
      {
         var $obj = $("#wb_Card4");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card4', 'animate-fade-in-up', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card4', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card4').inViewPort(true))
      {
         $('#wb_Card4').addClass("in-viewport");
      }
      onScrollCard4();
      $(window).scroll(function(event)
      {
         onScrollCard4();
      });
      function onScrollCard19()
      {
         var $obj = $("#wb_Card19");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card19', 'animate-fade-in-up', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card19', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card19').inViewPort(true))
      {
         $('#wb_Card19').addClass("in-viewport");
      }
      onScrollCard19();
      $(window).scroll(function(event)
      {
         onScrollCard19();
      });
      function onScrollText1()
      {
         var $obj = $("#wb_Text1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text1', 'transform-tada', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text1').inViewPort(true))
      {
         $('#wb_Text1').addClass("in-viewport");
      }
      onScrollText1();
      $(window).scroll(function(event)
      {
         onScrollText1();
      });
   });
