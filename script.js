Shery.mouseFollower(); 
 Shery.makeMagnet(".magnet");

  const videos = document.querySelectorAll(".cards video");

  videos.forEach((video) => {
    video.muted = true; 
    video.loop = true;  

    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; 
    });
  });
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
    });
