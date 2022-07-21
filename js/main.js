// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

//서치칸을 클릭하면 포커스가 됌
searchEl.addEventListener("click", function() {
    searchInputEl.focus();
})

//포커스하면 통합검색이 나옴
searchInputEl.addEventListener("focus", function() {
    searchInputEl.setAttribute("placeholder", "통합검색");
})

//블러하면 통합검색을 안보이게 만듬
searchInputEl.addEventListener("blur", function() {
    searchInputEl.setAttribute("placeholder", "");
})

//SWIPER 
//NOTICE > SWIPER
const swiperNotice = new Swiper(".notice .notice_line .swiper", {
    direction: "vertical",
    loop: true,
    autoplay: true,
})

//PROMOTION
//PROMOTION >> SWIPER
const swiperPromotion = new Swiper(".promotion .swiper", {
    direction: "horizontal", //기본값
    slidesPerView: 3, //한번에 몇개를 볼건지
    spaceBetween: 10, //각각의 간격
    centeredSlides: true, //슬라이드 센터 여부
    loop: true, 
    autoplay: { //재생시간 설정
        delay: 1500,
        disableOnInteraction: false, //클릭하고 움직이는 기능을 끈다
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true, //클릭가능 여부
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev", //이전 버튼 클래스 설정
        nextEl: ".promotion .swiper-button-next", //이후 버튼 클래스 설정
    }
})

//PROMOTION AUTOPLAY CONTROL(프로모션 자동재생 멈추기, 이미지바꾸기)
function controlAutoplay() {
    if(swiperPromotion.autoplay.running === true) {//running 돌아가는지 확인하는 변수명
        swiperPromotion.autoplay.stop();
        document.querySelector(".change_icon").src = "./images/start.png";
    } else {
        swiperPromotion.autoplay.start();
        document.querySelector(".change_icon").src = "./images/pause.png";
    }
}

//TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle_promotion");

promotionToggleBtn.addEventListener("click", function() {
    if(promotionEl.classList.contains("hide")) {
        promotionEl.classList.remove("hide");
    } else {
        promotionEl.classList.add("hide");
    }

    if(promotionToggleBtn.style.transform === "rotate(180deg)") {
        promotionToggleBtn.style.transform = "rotate(0deg)";
    } else {
        promotionToggleBtn.style.transform = "rotate(180deg)";
    }
})

//SCROLL ANIMATION(스크롤 위치 알기)
// window.addEventListener("scroll", function() {
//     scrollYpos = window.scrollY;
//     console.log(scrollY)
// })

//VISUAL ROAD
window.addEventListener("load", function() {
        const peruAnimation = document.querySelector(".visual .inner");
        peruAnimation.classList.add("visual_scroll");
})

//PERU ANIMATION
window.addEventListener("scroll", function() {
    if(scrollY > 350) {
        const peruAnimation = document.querySelector(".peru");
        peruAnimation.classList.add("peru_scroll");
    }
})

// INDONESIA ANMATION
window.addEventListener("scroll", function() {
    if(scrollY > 1000) {
        const indonesiaAnimation = document.querySelector(".indonesia");
        indonesiaAnimation.classList.add("indonesia_scroll");
    }
})

//FAVORITE
window.addEventListener("scroll", function() {
    if(scrollY > 1500) {
        const favoriteAnimation = document.querySelector(".favorite");
        favoriteAnimation.classList.add("favorite_scroll");
    }
})

//MAGAZINE
window.addEventListener("scroll", function() {
    if(scrollY > 1900) {
        const favoriteAnimation = document.querySelector(".magazine");
        favoriteAnimation.classList.add("magazine_scroll");
    }
})

//STORE
window.addEventListener("scroll", function() {
    if(scrollY > 2500) {
        const favoriteAnimation = document.querySelector(".store");
        favoriteAnimation.classList.add("store_scroll");
    }
})

//드롭다운 속도 구현(실패..)
// const dropDown = document.querySelector(".item__contents__menu");

// dropDown.addEventListener("mouseover", function() {
//     dropDown.slideDown(2000)
//     console.log(mouseover)
// })

// $(".inner .main_menu .item .item__contents").mouseover(function() {
//     $(this).children(".inner .main_menu .item .item__contents").hover().slideDown(3000);
// })animate__fadeInDown