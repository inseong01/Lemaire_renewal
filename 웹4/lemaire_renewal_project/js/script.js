// swiper
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 20,
});

// aos
AOS.init();

let currentScroll = 0;
const $body = document.querySelector('body');
const $sec2 = document.querySelector('.sec_2');
const $sec3 = document.querySelector('.sec_3');

const $header_area = document.querySelector('.header_area');
const $top_btn = document.querySelector('.top_btn');
const $lists = document.querySelectorAll('.main_menu li');
const $sub_menu_box = document.querySelector('.sub_menu_box');
const $sub_menus = document.querySelectorAll('.sub_menu');

// body 배경 전환(offset)
window.addEventListener('scroll', () => {
  const sec2Offect = $sec2.offsetTop - 500;
  const sec3Offect = $sec3.offsetTop - 200;
  if (sec2Offect < this.scrollY && sec3Offect > this.scrollY) {
    $body.classList.add('active');
  } else {
    $body.classList.remove('active');
  }
});


// header 스크롤
// window.addEventListener('scroll', function() {
//   if (this.scrollY > currentScroll) {
//     // 스크롤 다운
//     $header_area.classList.add('active');
//   } else {
//     // 스크롤 업
//     $header_area.classList.remove('active');
//   }
//   currentScroll = this.scrollY;
// });
window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    // 스크롤 다운
    $header_area.classList.add('active');
    
    $sub_menu_box.classList.remove('on');
    // $sub_menus 클래스 초기화 ('on' 제거)
    for (let menu of $sub_menus) {
      menu.classList.remove('on');
    }
  } else {
    // 스크롤 업
    $header_area.classList.remove('active');
  }
});

// scroll top_btn
window.addEventListener('scroll', () => {
  if (scrollY >= 300) {
    $top_btn.classList.add('on');
  } else if (scrollY === 0) { // wheel 이벤트, 휠을 사용하지 않아서 헤더 나타나지 않음
    $header_area.classList.remove('active');
  } else {
    $top_btn.classList.remove('on');
  }
})
$top_btn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// sub_menu_box
for (let li of $lists) {
  // $lists 중에서 li 하나 선택
  li.addEventListener('mouseenter', function() {
    $sub_menu_box.classList.add('on');
    
    // $sub_menus 클래스 초기화 ('on' 제거)
    for (let menu of $sub_menus) {
      menu.classList.remove('on');
    }
    
    // li의 데이터 속성 가져옴
    const data_alt = li.getAttribute('data-alt');
    const $submenu = document.querySelector(`#${data_alt}`);
    $submenu.classList.add('on');
    
  });
}
$sub_menu_box.addEventListener('mouseleave', function() {
  this.classList.remove('on');
  
  // $sub_menus 클래스 초기화 ('on' 제거)
  for (let menu of $sub_menus) {
    menu.classList.remove('on');
  }
});


//hamburger 
const $hamburger = document.querySelector(`#hamburger`);
const $mainMenu = document.querySelector(`.header_area .main_menu`);
$hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    $mainMenu.classList.add('active');
  } else {
    $mainMenu.classList.remove('active');
  }
});