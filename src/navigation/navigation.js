// 监听鼠标移入logo事件
$(document).on('mouseenter','.Jnmh-btnlogo',function(){
    $('#nmh-navicon').addClass('Jnmh-open');
    GtoggleNavlogo();
  });
  // 监听鼠标移除导航球移除事件（展开收缩悬浮球为什么不直接监听#nmh-navicon而多了一步监听logo是为了减少边缘触发）
  $(document).on('mouseleave','#nmh-navicon',function(){
    $('#nmh-navicon').removeClass('Jnmh-open');
    GtoggleNavlogo();
  });
  var GtoggleNavlogo = function(){
      var li = $('#nmh-navicon').find('.Jnmh-subli');
      var lilen = li.length;
      var avgDeg =  180/(lilen-1);// 平均角度
      var initDeg = 0;// 起始方向角度
      if($('#nmh-navicon').hasClass('Jnmh-onleft')){
        // 如果悬浮球被拖拽到左边，则二级菜单则显示右侧
        li.css({transform: 'rotate(0deg)'});
        initDeg =  180;
      }else{
        // 默认悬浮球在右边，二级菜单显示在左侧
        li.css({transform: 'rotate(-360deg)'});
      }
      for(var i=0,j=lilen-1; i<lilen; i++,j--) {
          var d =  initDeg - (i*avgDeg);
          var z = initDeg?j:i;
          // console.log(d);
          $('#nmh-navicon').hasClass('Jnmh-open') ? GrotateNavlogo(li[z],d) : GrotateNavlogo(li[z],0);
      }
  };
  var GrotateNavlogo = function(dom,deg){
    $({a:0}).animate({a:deg}, {
          step: function(now,fx) {
              $(dom).css({ transform: 'rotate('+now+'deg)' });
              $(dom).children().css({ transform: 'rotate('+(-now)+'deg)' });
          }, duration: 0
      });
  }

  // 鼠标拖动logo移动
  /*$(document).on('mousedown','.Jnmh-btnlogo',function(e_down){
    var wrap = $('#nmh-navicon');
    wrap.removeClass('Jnmh-open');
    $('.Jnmh-m-submenu').hide();
    GtoggleNavlogo();
    
    var positionDiv = wrap.offset();
      var distenceX = e_down.pageX - positionDiv.left;
      var distenceY = e_down.pageY - positionDiv.top + $(document).scrollTop();
    $(document).mousemove(diy_move);
    function diy_move(e_move){
      var x = e_move.pageX - distenceX;
          var y = e_move.pageY - distenceY;

          if (x < 0) {
              x = 0;
          } else if (x > $(document).width() - wrap.outerWidth(true)) {
              x = $(document).width() - wrap.outerWidth(true);
          }

          if (y < 0) {
              y = 0;
          } else if (y > $(window).height() - wrap.outerHeight(true)) {
              y = $(window).height() - wrap.outerHeight(true);
          }

          $(wrap).css({
              'left': x + 'px',
              'top': y + 'px'
          });
    }
    $(document).mouseup(function() {
      var x = $(wrap).offset().left;
      var rm = '',ad = 'Jnmh-open';
      if(x > $(document).width()/2){
        x = $(document).width() - wrap.outerWidth(true) -10 ;
        rm = 'Jnmh-onleft';
      }else{
        x = 10;
        ad += ' Jnmh-onleft';
      }
      $(wrap).css({left: x + 'px'}).addClass(ad).removeClass(rm);
      $('.Jnmh-m-submenu').show();
      GtoggleNavlogo();
          $(document).unbind('mousemove',diy_move);
      });

  });*/


  var navLang = {
  "en": {
    "navhome":"Home",
    "navwallet":"Wallet",
    "navexplorer":"Explorer",
    "navfaq":"FAQ",
    "navabout":"About",
    "one-CPU-one-vote":"one-CPU-one-vote",
    "no-no-no":"NO ICO, NO Presale, NO Founder's rewards",
    "fastest":"the world’s fastest PoW blockchain",
    "total":"Total",
    "supply":"Supply",
    "blocktime":"Block time",
    "seconds":"5 Seconds",
    "height":"Block height",
    "nethash":"Nethash",
    "refresh":"Refresh",
  },
  "zh": {
    "navhome":"主页",
    "navwallet":"钱包",
    "navexplorer":"浏览器",
    "navfaq":"常见问题",
    "navabout":"关于",
    "one-CPU-one-vote":"一CPU一票",
    "no-no-no":"无ICO  无预售  无创始人奖励",
    "fastest":"世界上最快的 PoW 区块链",
    "total":"总量",
    "supply":"流通量",
    "blocktime":"区块时间",
    "seconds":"5 秒",
    "height":"区块高度",
    "nethash":"网络算力",
    "refresh":"刷新",
  }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if('localStorage' in window){
   //var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
   //if (!Object.keys(navLang).includes(lang)) lang = 'en';
   var lang = readCookie('language');
   if(lang===null) lang="en"
   console.log(lang);

}

$(document).ready(function() {
  $(".lang").each(function(index, element) {
    $(this).text(navLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
/*$(".translate").click(function() {
  var lang = $(this).attr("id");

  // update localStorage key
  if('localStorage' in window){
    localStorage.setItem('lang', lang);
    console.log( localStorage.getItem('lang') );
  }

  $(".lang").each(function(index, element) {
    $(this).text(navLang[lang][$(this).attr("key")]);
  });
});*/

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

