document.addEventListener('DOMContentLoaded', function() {
    // AOS
    AOS.init();

    // mousewheel Event (휠이 내려갈 때 헤더가 안 보이다가 휠이 올라갈 때 보임)
    window.addEventListener('wheel', (event) => {
        const headerArea = document.querySelector('.header_area');

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove('scroll');
        } else {
            // wheel up
            headerArea.classList.add('scroll');
        }
    });

    // body bg 변경 (scroll Event offset값 사용)
    const sec2 = document.querySelector('.sec_2');
    const sec3 = document.querySelector('.sec_3');

    window.addEventListener('scroll', () => {
        const sec2Offset = sec2.offsetTop - 500; // offset == sec의 시작 위치
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const body = document.querySelector('body'); // body 태그 선택자 충돌 가능

        if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
            body.classList.add('bg');
        } else {
            body.classList.remove('bg');
        }
    });

    // sec_4 swiper
    const swiper = new Swiper('.ceoSwiper', {
        direction: 'vertical',
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 20,
    });

    // sub_menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 변경
    const submenuTab = document.querySelectorAll('.main_menu li');
    const submenuBox = document.querySelector('.sub_menu_box');
    const submenu = document.querySelectorAll('.sub_menu');

    for (let li of submenuTab) {
        li.addEventListener('mouseenter', function() {
            submenuBox.classList.add('active');

            // 탭메뉴 연결
            const tab = this.getAttribute('data-alt');
            
            for (let tabContent of submenu) {
                tabContent.classList.remove('active'); // active 전부 제거
            }

            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add('active');
        });
    }
    submenuBox.addEventListener('mouseleave', function() {
        this.classList.remove('active');

        for (let tabContent of submenu) {
            tabContent.classList.remove('active'); // active 전부 제거
        }
    })    

    // 상단이동버튼 300px 이상일 때 top_btn 보여짐 (scroll 클래스명 설정해놓음) / 최상단으로 올라가는 상단이동 버튼 구현 -> 클릭했을 때 최상단으로 이동
    const topBtn = document.querySelector('.top_btn');

    window.addEventListener('scroll', function() {
        const scrollTop = this.scrollY;
        if (scrollTop >= 300) {
            topBtn.classList.add('scroll');
        } else {
            topBtn.classList.remove('scroll');
        }
    });
    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 작은 그리드에서 햄버거 버튼 클릭하면 메인메뉴가 나오면서 햄버거 버튼 스위치 되도록 처리
    const menuBtn = document.querySelector('#hamburger');
    const mainMenu = document.querySelector('.main_menu');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        // contains 활용해서 메인메뉴 버튼 액티브가 있을 때 추가 아니면 제거
        const hasClass = this.classList.contains('active');
        if (hasClass) {
            mainMenu.classList.add('active');
        } else {
            mainMenu.classList.remove('active');
        }
    });
});