// function updateVideoSource() {
//     const video = document.querySelector('.video-bg video'); // 특정 video 태그 선택
//     const source = video.querySelector('source'); 

//     // data 속성에서 영상 경로 가져오기
//     const desktopSrc = video.dataset.srcDesktop;
//     const mobileSrc = video.dataset.srcMobile;

//     // 화면 크기에 따라 소스 변경
//     source.src = window.innerWidth < 991 ? mobileSrc : desktopSrc;
//     video.load(); // 새로운 영상 로드
// }

// window.addEventListener('resize', updateVideoSource);
// window.addEventListener('load', updateVideoSource);
