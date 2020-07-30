$(function() {

  //ページ内スクロール
  $('a[href^="#"]').on('click', function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  

  //ページ上部へ戻る
  var backToTop = $('#backToTop');
  backToTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      backToTop.fadeIn();
    } else {
      backToTop.fadeOut();
    }
  });
  $('#backToTop').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});

$(function(){
    var setImg = '#top-img';
    var fadeSpeed = 1600;
    var switchDelay = 4000;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});
