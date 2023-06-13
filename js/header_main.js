
$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
    
    $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
        header.addClass('header_fixed');
        $('body').css({
        'paddingTop': hederHeight+ 'px' // делаем отступ у body, равный высоте шапки
        });
    } else {
        header.removeClass('header_fixed');
        $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
        })
    }
    if($(this).scrollTop() > 100) {
      header.css({
        'padding': '5px 0',
        'background': '#030410',
        'transition': '.3s'
      });
  } else {
      header.css({
        'padding': '15px 0',
        'background': 'none',
        'transition': '.3s'
      });
  }
    });
    });
  