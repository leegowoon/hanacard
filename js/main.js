 // ✔ slick
 
 // 변수 let을 사용할 때
 let eb_slider = $('.eb_slider_list')
 // $('.eb_slider_list').slick({
 eb_slider.slick({
    arrows: false,
    dots: true,
    autoplay:true,
    pauseOnHover:false,
    fade:true
});

// ✔ 정지/재생 버튼

// 선택자.addEventListener('click',function(){}) >> 권장
// 선택자.onclick(function(){})
$('.event_box2 .page_act .btn_stop').click(function(e){
    e.preventDefault(); // >> 위로 튕겨올라가는 것을 방지(생기는이유:a태그이기 때문에)
    if($('.event_box2 .page_act').hasClass('on')){ // >> on이라는 class명을 가지고 있다면 true, 없다면 false
        $('.event_box2 .page_act').removeClass('on');
        eb_slider.slick('slickPause'); //slick-github-method // method는 객체가 가지고 있는 함수
    }
})

/* $('.event_box2 .page_act .btn_play').click(function(e){
    e.preventDefault();
    $('.event_box2 .page_act').addClass('on');
}) */

// 위의 코드도 되지만, if문을 사용했을 때
$('.event_box2 .page_act .btn_play').click(function(e){
    e.preventDefault();
    if(!$('.event_box2 .page_act').hasClass('on')){ // >> $앞에 !붙히면 반대가 된다. not의 의미 // !! : 긍정
        $('.event_box2 .page_act').addClass('on');
        eb_slider.slick('slickPlay');
    }
})


$('.card').slick({
    arrows: false,
    dots: true,
    autoplay:true,
    pauseOnHover:false,
    fade:true
  });

  // ✔ 정지/재생 버튼

// 선택자.addEventListener('click',function(){}) >> 권장
// 선택자.onclick(function(){})
$('.event_box3 .page_act .btn_stop').click(function(e){
    e.preventDefault(); // >> 위로 튕겨올라가는 것을 방지(생기는이유:a태그이기 때문에)
    if($('.event_box3 .page_act').hasClass('on')){ // >> on이라는 class명을 가지고 있다면 true, 없다면 false
        $('.event_box3 .page_act').removeClass('on');
        $('.card').slick('slickPause'); //slick-github-method // method는 객체가 가지고 있는 함수
    }
})

/* $('.event_box2 .page_act .btn_play').click(function(e){
    e.preventDefault();
    $('.event_box2 .page_act').addClass('on');
}) */

// 위의 코드도 되지만, if문을 사용했을 때
$('.event_box3 .page_act .btn_play').click(function(e){
    e.preventDefault();
    if(!$('.event_box3 .page_act').hasClass('on')){ // >> $앞에 !붙히면 반대가 된다. not의 의미 // !! : 긍정
        $('.event_box3 .page_act').addClass('on');
        $('.card').slick('slickPlay');
    }
})


// life 버튼

let tab=$('.life_menu ul li');
let menu=$('.life_style ul li');

tab.mouseover(function(){
    let target = $(this);
    let index = target.index();
    console.log(index)
    menu.css({opacity:0})
    menu.eq(index).css({opacity:1}) // >> li중에서 index번호와 같은것
})