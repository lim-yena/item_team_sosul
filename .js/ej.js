function updateVideoSource() {
    const video = document.querySelector('.video-bg video'); // 특정 video 태그 선택
    const source = video.querySelector('source'); 

    if (window.innerWidth < 991) {
        source.src = "./video/mob_video.mp4"; // 모바일용
    } else {
        source.src = "./video/main_video.mp4"; // 데스크톱용
    }

    video.load(); // 새로운 영상 로드
}

window.addEventListener('resize', updateVideoSource);
window.addEventListener('load', updateVideoSource);


alert("안녕하세요");