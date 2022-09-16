$(".slider__block").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 583,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
  });
  
  var countdown = 30 * 60 * 1000;
  var timerId = setInterval(function(){
    countdown -= 1000;
    var min = Math.floor(countdown / (60 * 1000));
    var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct
  
    if (countdown <= 0) {
       alert("30 min!");
       clearInterval(timerId);
       //doSomething();
    } else {
       $(".order-form__time").html(min + " : " + sec);
    }
  
  }, 1000); //1000ms. = 1sec.