document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById('masonry-gallery');
  if (gallery) {
    gallery.style.opacity = 0;
  }

  const body = document.querySelector("body");
  body.classList.remove("opacity-0");
  body.classList.add("opacity-100");

  const photos = document.querySelectorAll("img");
  let delay = 0;
  photos.forEach((photo) => {
    setTimeout(() => {
      photo.classList.remove("opacity-0");
      photo.classList.add("opacity-100");
    }, delay);
    delay += 100;
  });

  if (gallery) {
    setTimeout(() => {
      gallery.style.transition = 'opacity 0.5s ease-in-out';
      gallery.style.opacity = 1;
    }, 100);
  }
});
