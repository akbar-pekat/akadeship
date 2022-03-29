$(document).ready(function() {
  $('.search .menu').click(function() {
    $('.search .menu .container').removeClass('active');
    $(this).find('.container').addClass('active');
    $('.search .menu p').css('font-weight', 'normal');
    $('.search .menu p').css('color', 'black');
    $(this).find('p').css('font-weight', 'bold');
    $(this).find('p').css('color', '#8A39E1');
  });
});


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 225) {
    $('#navbar').removeClass("search").addClass('float');
  } else {
    $('#navbar').removeClass("float").addClass('search');
  }
}); 

/*window.onscroll = function() { myFunction() };

var navbar = $("#navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    //navbar.addClass("sticky");
    $('#navbar').removeClass("search").addClass('float');
  } else {
    $('#navbar').removeClass("float").addClass('search');
    //navbar.removeClass("sticky");
  }
}*/


$('.beasiswa-con').hide();
$('.lomba-con').hide();
$('.webinar-con').hide();


$('.search .beranda').click(function() {
  $('.forall-con').show();
  $('.lomba-con').hide();
  $('.beasiswa-con').hide();
  $('.webinar-con').hide();

  $('.beranda .container img').attr('src', 'img/home.png');
  $('.beasiswa .container img').attr('src', 'img/off/teacher.png');
  $('.lomba .container img').attr('src', 'img/off/award.png');
  $('.webinar .container img').attr('src', 'img/off/ticket-star.png');
});

$('.search .beasiswa').click(function() {
  $('.beasiswa-con').show();
  $('.lomba-con').hide();
  $('.forall-con').hide();
  $('.webinar-con').hide();

  $('.beranda .container img').attr('src', 'img/off/home.png');
  $('.beasiswa .container img').attr('src', 'img/teacher.png');
  $('.lomba .container img').attr('src', 'img/off/award.png');
  $('.webinar .container img').attr('src', 'img/off/ticket-star.png');
});

$('.search .lomba').click(function() {
  $('.lomba-con').show();
  $('.beasiswa-con').hide();
  $('.forall-con').hide();
  $('.webinar-con').hide();

  $('.beranda .container img').attr('src', 'img/off/home.png');
  $('.beasiswa .container img').attr('src', 'img/off/teacher.png');
  $('.lomba .container img').attr('src', 'img/award.png');
  $('.webinar .container img').attr('src', 'img/off/ticket-star.png');
});

$('.search .webinar').click(function() {
  $('.webinar-con').show();
  $('.lomba-con').hide();
  $('.beasiswa-con').hide();
  $('.forall-con').hide();

  $('.beranda .container img').attr('src', 'img/off/home.png');
  $('.beasiswa .container img').attr('src', 'img/off/teacher.png');
  $('.lomba .container img').attr('src', 'img/off/award.png');
  $('.webinar .container img').attr('src', 'img/ticket-star.png');
});
