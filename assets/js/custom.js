$(".toggle-nav li").click(function () {
  $(this)
    .addClass("active")
    .parents(".toggle-nav")
    .find("li")
    .not($(this))
    .removeClass("active");
  var currentTabIndex = $(this).index();
  $(".toggle-content:eq(" + currentTabIndex + ")")
    .addClass("visible")
    .parents(".tabbed-content")
    .find(".toggle-content")
    .not($(".toggle-content:eq(" + currentTabIndex + ")"))
    .removeClass("visible");
});

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.secondary-nav').addClass('sticky-top');
    } else {
      $('.secondary-nav').removeClass('sticky-top');
    }
  });
});

$('.ytvideo[data-video]').one('click', function() {
    var $this = $(this);
    var width = $this.attr("width");
    var height = $this.attr("height");
    $this.html('<iframe allow="autoplay" src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
});

// Play videos embeded


function play(id){
let html='<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_' + id + ' videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/' + id + '/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>';
document.getElementById('video_' + id).innerHTML=html;
}