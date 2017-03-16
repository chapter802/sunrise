/*导航栏下拉子菜单 start*/
$(function(){
   $('#header').find('.top-nav>ul>li').hover(function(){
    $(this).find('.sub-nav').show();
  },function(){
    $(this).find('.sub-nav').hide();
  });
/*图片轮播 start*/
(function(){
    var $slid = $('#slide');
    var siz = $slid.find('li').size();
    var index = 0;
    var timer = setInterval(function(){move();}, 3000);

    function moveLeft(){
          index--;
          if(index == -1) {
            index = siz-1;
          }
            changeImg();
        }

        function move() {
            index++;
            if (index == siz) {
                index = 0;
            }
          changeImg();
        }


        $slid.find('li').hover(function() {
            clearInterval(timer);
        }, function() {
           timer = setInterval(function(){move();}, 3000);
        });
      function changeImg(){
          $slid.find('i').eq(index).addClass('active')
            .siblings().removeClass('active');
          $slid.find('li').eq(index).stop(true,true)
            .fadeIn(500).siblings().fadeOut(500);
        }
        changeImg();

        $slid.find('i').hover(function(){
          clearInterval(timer);
          index = $(this).index();
          $slid.find('i').removeClass('active');
          $slid.find('i').eq(index).addClass('active');
          $slid.find('li').eq(index).stop(true,true)
            .fadeIn(500).siblings().fadeOut(500);
        });


/*左右按钮效果 start*/
        var $contl = $('#control').find('a');
        $contl.filter('.prev').click(function(){
          clearInterval(timer);
          moveLeft();
        });
        $contl.filter('.next').click(function(){
          clearInterval(timer);
          move();
        });

        $('#slide li, #control a').mouseover(function(){
          $contl.addClass('cons');
        }).mouseout(function(){
          $contl.removeClass('cons');
        });
})();
    /*左右按钮效果 end*/
/*图片轮播 end*/

/*Books 悬浮阴影 start*/
  var $bookAct = $('#books').find('.books-rcd-container');
      $bookAct.bind('mouseover', function(){
        $(this).addClass('books-rcd-active')
          .siblings().removeClass('books-rcd-active');
   });

      $bookAct.mouseout(function(){
        $bookAct.removeClass('books-rcd-active');
  });

/*Books 悬浮阴影 end*/

/*music 评分 start*/
  $('#music').find('.rating a').click(function(){
      var clRating = $(this).parent().attr('class');
      $(this).parent().parent().removeClass()
        .addClass('rating '+clRating+'star');
      $(this).blur();
      return false;
  });
  /*music 评分 end*/

  /*documentary 推荐内容鼠标滑入显示信息 start*/
  (function(){

  var $docu = $('#docu');
  var $docuInfo = $docu.find('.docu-rlist-info');
  var $docuImg = $docuInfo.parent().find('img');
   $docuImg.hover(function(){
    $(this).parent().parent().find('.docu-rlist-info').addClass('hov');
    });
   $docuInfo.hover(function(){
    $(this).addClass('hov');
   }).mouseout(function(){
        $docuInfo.removeClass('hov');
    });
      $docuImg.mouseout(function(){
    $(this).parent().parent().find('.docu-rlist-info').removeClass('hov');
    });

/*documentary 推荐内容鼠标滑入显示信息 end*/

/*视频播放 start*/
    $docu.find('.docu-rcdShow i').click(function(){
    $(this).css('opacity', '0');
    $('#docu').find('video')[0].play();
  });

/*视频播放 end*/

/*documentary recommend左右切换(修改css属性) start*/
  var $docuRprev = $docu.find('.prev');
  var $docuRnext = $docu.find('.next');

  var $docuR = $docu.find('.docu-rlist');
  $docuR.css('width', '2400px');
    $docuRnext .click(function(){
      $(this).removeClass('show');
      $docuRprev.addClass('show');
      $docuR.find('ul').eq(0).css('left','-1200px');
      $docuR.find('ul').eq(1).css('left','0');
  });
    $docuRprev.click(function(){
      $(this).removeClass('show');
      $docuRnext.addClass('show');
      $docuR.find('ul').eq(0).css('left','0');
      $docuR.find('ul').eq(1).css('left','1200px');
  });
})();
/*documentary recommend左右切换 end*/

/*windows 推荐框hover透明度变化 start*/
(function(){

  var $win = $('#win');
    $win.find('.mask').hover(function(){
      $(this).addClass('acti');
      $(this).parent().find('.ad-dl').addClass('dlhover');
  }).mouseout(function(){
      $(this).removeClass('acti');
      $(this).parent().parent().find('.ad-dl').removeClass('dlhover');
  });

    $win.find('.ad-info').hover(function(){
      $(this).parent().find('.mask').addClass('acti');
      $(this).parent().find('.ad-dl').addClass('dlhover');
  }).mouseout(function() {
      $(this).parent().find('.mask').removeClass('acti');
      $(this).parent().find('.ad-dl').removeClass('dlhover');
  });
    $win.find('.icon').hover(function(){
      $(this).parent().find('.mask').addClass('acti');
      $(this).parent().find('.ad-dl').addClass('dlhover');
  }).mouseout(function() {
      $(this).parent().find('.mask').removeClass('acti');
      $(this).parent().find('.ad-dl').removeClass('dlhover');
  });

    $win.find('.ad-dl').hover(function(){
      $(this).addClass('dlhover');
  }).mouseout(function(){
      $(this).addClass('dlhover');
  });
  /*windows 推荐框hover透明度变化 end*/

  /*windows Recommend 内容鼠标滑入图片左右移动10px start*/
    $win.find('.win-img-side img').hover(function(){
      $(this).stop().animate({
          'margin-right':'10px',
          'margin-left':'-10px'
         }, 300)},function(){
        $(this).stop().animate({
          'margin-right':'0',
          'margin-left':'0'
       }, 300)
    });

    $win.find('.win-img-list a').hover(function(){
       $(this).find('img').stop().animate({
          'margin-right':'10px',
          'margin-left':'-10px'
         }, 300)},function(){
        $(this).find('img').stop().animate({
          'margin-right':'0',
          'margin-left':'0'
       }, 300)
    });
})();
/*windows Recommend 内容鼠标滑入图片左右移动10px endt*/

/*mac osx macdt时间显示 start*/
(function() {
  setInterval( currentTime, 1000 );

   function currentTime() {
      var ctime = new Date();
      var hours = ctime.getHours();
      var minutes = ctime.getMinutes();
      var str = p(hours)+':'+p(minutes);
      $('#mac').find('.ctime').html(str);
    }
    function p(s) {
      return s < 10 ? '0' + s : s;
    }

  /*mac osx 状态栏时间显示 end*/

/*mac osx Dock栏滑动放大 start ---- 未实现 ---- mac osx Dock栏滑动放大 end*/

/*mac osx Dock图标hover提示 start*/
  var $mac = $('#mac');
    $mac.find('.mac-basebar a').hover(function(){
        $(this).find('span').css('display','inline');
  }).mouseout(function(){
        $(this).find('span').css('display','none');
  });
  /*mac osx Dock图标hover提示 end*/

  /*mac osx 点击Launchpad图标背景切换 start*/
  var clickNumber =0;
    $mac.find('.launchpad').click(function(){
      if(clickNumber %2 == 0){
        $mac.find('.macdt').css('background','url(img/macoxsc/lanchpad.png)');
        $mac.find('.mac-folder').css('display','none');
          }else{
        $mac.find('.macdt').css('background','url(img/macoxsc/macos_sierra.jpg)');
        $mac.find('.mac-folder').css('display','inline');
      }
      clickNumber ++;
  });
})();
/*mac osx 点击Launchpad图标背景切换 end*/

/*mac osx 桌面拖拽 start*/

/*mac osx 桌面拖拽 end*/

/* 导航栏置顶 不兼容ie start*/
$(document).ready(function() {
 $('#header').navfix(0,15);

});
(function() {
  $.fn.navfix = function(mtop) {
    var nav = $(this),
      dftop = $('#books').offset().top-$(window).scrollTop(),
      dfcss = [];
      dfcss[0] = nav.css('position');
      dfcss[1] = nav.css('top');
    $(window).scroll(function() {
      if($(this).scrollTop() > dftop){
         nav.css({position: 'fixed', top: mtop + 'px'});
         $('#returnTop').css('display','block');
       } else{
        nav.css({position: dfcss[0], top: dfcss[1]});
        $('#returnTop').css('display','none');
      }
    })
  }
})();

/* 导航栏置顶 不兼容ie end*/

/* wallpapers 子菜单滑动图片切换 start*/
$('#wallp').find('.wallp-snav ul li').click(function(){
      var index = $(this).index();
      $(this).addClass('hov').siblings().removeClass('hov');
      $('#wallp').find('.wallp-curr').eq(index).removeClass('hide')
        .siblings().addClass('hide');
});

/* wallpapers 子菜单滑动图片切换 end*/


/*右下侧返回顶部按钮效果 start*/

$('#returnTop').click(function(){
      $("html,body").animate({ scrollTop: 0 },500)
    });
/*右下侧返回顶部按钮效果 end*/


/*wallpapers页面 start*/
(function(){
  var $fall = $('#fall');
  var fimgWidth = ($fall.width()-70)/4;
  var sinnerWidth = ($fall.width()-70)/4+70;
  $('#side-inner').css('width',sinnerWidth);
  $fall.find('.fall-img').css('width',fimgWidth);

/*点击展开图标左右滑动效果 start*/
  var $expd = $('#expand-icon');
  var $iconA = $expd.find('a');
  var clickNumber = 0;
  $expd.click(function(){
      if(clickNumber %2 == 0){
        $iconA.addClass('change');
        $('#title-img').stop().animate({'left':'-46px'},300);
        $('#fall').stop().animate({'marginLeft':sinnerWidth},300);
      } else {
        $iconA.removeClass('change');
        $('#title-img').stop().animate({'left':'0'},300);
        $('#fall').stop().animate({'marginLeft':'70px'},300);
      }
        clickNumber ++;
  });

})();
/*点击展开图标左右滑动效果 end*/

/*图片瀑布流 start*/

/*图片瀑布流 end*/

/*图片中间加十字 start*/
$('#fall').find('.fall-img').hover(function(){
      $(this).find('.plus').animate({'opacity':'1'},150);
      $(this).find('.wallp-mask').css('opacity','0.65');
}).mouseout(function(){
      $(this).find('.plus').animate({'opacity':'0'},150);
      $(this).parent().find('.wallp-mask').css('opacity','0');
});

/*图片中间加十字 end*/


/*图片上一张下一张切换 start*/


/*图片上一张下一张切换 end*/





/*wallpapers页面 end*/

});


/*wallpapers 点击小图 弹出大图 start*/
$(function(){
var showImg= $('.show-img');

$('#wallp .img-list li a, #fall .fall-img').click(function(){
  var src = $(this).find('img').attr( 'src' );
  var dsource=$(this).find('img').attr('data-source');
  showImg.find('.download').attr('href', dsource);
  showImg.find('img').attr( 'src', src );
  showImg.fadeIn(400);
});

  showImg.click( function(){
  showImg.find( 'img' ).attr( 'src', '' );
  showImg.fadeOut(400);
});

});

/*wallpapers 点击小图 弹出大图 end*/




























