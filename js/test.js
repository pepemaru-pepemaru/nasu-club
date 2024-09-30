
$(document).ready(function() {
  var pagetop = $('#footer_pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
     const ham = $('#js-hamburger');
     const nav = $('#js-nav');
     ham.on('click', function () { //ハンバーガーメニューをクリックしたら
          ham.toggleClass('close'); // ハンバーガーメニューにhamburgerクラスを付け外し
          nav.toggleClass('hamburger'); // ハンバーガーメニューにhamburgerクラスを付け外し

});
});



// おすすめメニューの画像のクリックで大きく表示する部分（モーダルというらしい）

$(function () {
     $('.modal__open').each(function () {
         $(this).on('click', function () {
             var target = $(this).data('target');
             var modal = document.getElementById(target);
             console.log(modal)
             $(modal).fadeIn();
         });
     });
     $('.modal__close').on('click', function () {
         $('.modal').fadeOut();
         return false;
     });
 });