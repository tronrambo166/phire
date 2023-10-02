(function ($) {
  "user strict";

  // preloader
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });

//Create Background Image
(function background() {
  let img = $('.bg_img');
  img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
  });
})();

// nice-select
$(".nice-select").niceSelect();

$(window).on('load', function () {
  $("a[data-rel^=lightcase]").lightcase();
  })

// header-fixed
var fixed_top = $(".header-section");
$(window).on("scroll", function(){
    if( $(window).scrollTop() > 100){  
        fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else{
        fixed_top.removeClass("animated fadeInDown header-fixed");
    }
});

// navbar-click
$(".navbar li a").on("click", function () {
  var element = $(this).parent("li");
  if (element.hasClass("show")) {
    element.removeClass("show");
    element.children("ul").slideUp(500);
  }
  else {
    element.siblings("li").removeClass('show');
    element.addClass("show");
    element.siblings("li").find("ul").slideUp(500);
    element.children('ul').slideDown(500);
  }
});

// sidebar sub
$(".has-sub > a").on("click", function () {
  var element = $(this).parent("li");
  if (element.hasClass("active")) {
    element.removeClass("active");
    element.children("ul").slideUp(500);
  }
  else {
    element.siblings("li").removeClass('active');
    element.addClass("active");
    element.siblings("li").find("ul").slideUp(500);
    element.children('ul').slideDown(500);
  }
});

//Profile Upload
function proPicURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          var preview = $(input).parents('.preview-thumb').find('.profilePicPreview');
          $(preview).css('background-image', 'url(' + e.target.result + ')');
          $(preview).addClass('has-image');
          $(preview).hide();
          $(preview).fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$(".profilePicUpload").on('change', function () {
  proPicURL(this);
});

$(".remove-image").on('click', function () {
  $(".profilePicPreview").css('background-image', 'none');
  $(".profilePicPreview").removeClass('has-image');
});

// notification
$(".notify-btn-area").click(function(){
  $(".notification-wrapper").slideToggle();
});

// sidebar mobile button
$(".control-btn-area .sidebar-mobile-btn").click(function(){
  $(".page-wrapper .sidebar-menu").toggleClass("active");
  $('.body-overlay').addClass('active');
});
$(document).on("click","#body-overlay",function(){
  $('.body-overlay').removeClass('active');
  $('.page-wrapper .sidebar-menu').removeClass('active');
});

// img-up
$('.imgUp').click(function () {
  upload();
});
function upload() {
  $(".upload").change(function () {
    readURL(this);
  });
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader(); reader.onload = function (e) {
      var preview = $(input).parents('.profile-thumb-area').find('.image-preview');
      $(preview).css('background-image', 'url(' + e.target.result + ')');
      $(preview).hide();
      $(preview).fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}


// Check if there's a stored mode in localStorage, default to dark mode if not found
var currentMode = localStorage.getItem('body') || 'dark-mode';

// Set the initial mode
setVersion(currentMode);

// Toggle mode on button click
$(document).on('click', '.theme-mode-btn', function() {
  currentMode = (currentMode === 'light-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('body', currentMode);
  setVersion(currentMode);
});

function setVersion(version) {
  if (version === 'light-mode') {
    $('body').addClass('light-mode');
    $('.theme-change img').attr('src', $('.theme-change img').attr('dark-img'));
    $('.theme-mode-btn').html('<i class="las la-moon"></i>');
  } else {
    $('body').removeClass('light-mode');
    $('.theme-change img').attr('src', $('.theme-change img').attr('white-img'));
    $('.theme-mode-btn').html('<i class="las la-sun"></i>');
  }
}

// dark - light mode end


})(jQuery);