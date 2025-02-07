const swiper = new Swiper('.swiper-container', {
    loop: true, // 반복 여부
    slidesPerView: 1, // 한 번에 보여줄 이미지 개수
    spaceBetween: 20, // 이미지 간의 간격
    navigation: {
        nextEl: '.swiper-button-next', // 다음 버튼
        prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
        el: '.swiper-pagination', // 페이지네이션 (선택 사항)
        clickable: true, // 클릭 가능하게 설정
    },
    autoplay: {
        delay: 3000, // 자동 슬라이드 시간 (ms)
        disableOnInteraction: false, // 사용자가 슬라이드를 이동시켜도 자동 슬라이드 유지
    },
});
