const images = [].slice.call(document.querySelectorAll('.gallery img'));
const slider = document.querySelector('.slider');
const sliderPreviews = [];
let currentIndex;

function changeSliderPreviews() {
  sliderPreviews.length = 0;

  switch (currentIndex) {
    case 0:
      sliderPreviews.push(images[images.length - 2]);
      sliderPreviews.push(images[images.length - 1]);
      sliderPreviews.push(images[currentIndex]);
      sliderPreviews.push(images[currentIndex + 1]);
      sliderPreviews.push(images[currentIndex + 2]);
      break;

    case 1:
      sliderPreviews.push(images[images.length - 1]);
      sliderPreviews.push(images[currentIndex - 1]);
      sliderPreviews.push(images[currentIndex]);
      sliderPreviews.push(images[currentIndex + 1]);
      sliderPreviews.push(images[currentIndex + 2]);
      break;

    case (images.length - 2):
      sliderPreviews.push(images[currentIndex - 2]);
      sliderPreviews.push(images[currentIndex - 1]);
      sliderPreviews.push(images[currentIndex]);
      sliderPreviews.push(images[currentIndex + 1]);
      sliderPreviews.push(images[0]);
      break;

    case (images.length - 1):
      sliderPreviews.push(images[currentIndex - 2]);
      sliderPreviews.push(images[currentIndex - 1]);
      sliderPreviews.push(images[currentIndex]);
      sliderPreviews.push(images[0]);
      sliderPreviews.push(images[1]);
      break;

    default:
      sliderPreviews.push(images[currentIndex - 2]);
      sliderPreviews.push(images[currentIndex - 1]);
      sliderPreviews.push(images[currentIndex]);
      sliderPreviews.push(images[currentIndex + 1]);
      sliderPreviews.push(images[currentIndex + 2]);
  }

[].slice.call(slider.querySelectorAll('.preview img')).forEach((item, i) => {
    item.src = sliderPreviews[i].src;
  });
}

images.forEach((image, i) => {
  image.addEventListener('click', () => {
    currentIndex = i;

    slider.style.display = 'flex';
    slider.style.top = window.pageYOffset * 2 + 'px';
    slider.classList.add('active');

    document.body.style.overflow = 'hidden';
    slider.querySelector('.image-container img').src = image.src.split('-min')[0] + '.jpg';

    changeSliderPreviews();
  });
});

slider.querySelector('.arrow-right').addEventListener('click', () => {
  if (currentIndex === images.length-1) currentIndex = -1;
  slider.querySelector('.image-container img').src = images[currentIndex + 1].src.split('-min')[0] + '.jpg';
  currentIndex++;

  changeSliderPreviews();
});

document.querySelector('.arrow-left').addEventListener('click', () => {
  if (currentIndex === 0) currentIndex = images.length;
  slider.querySelector('.image-container img').src = images[currentIndex - 1].src.split('-min')[0] + '.jpg';
  currentIndex--;

  changeSliderPreviews();
});

[].slice.call(slider.querySelectorAll('.preview img')).forEach((image) => {
  image.addEventListener('click', () => {
    slider.querySelector('.image-container img').src = image.src.split('-min')[0] + '.jpg';

    images.forEach((item, i) => {
      if (item.src === image.src) currentIndex = i;
    });

    changeSliderPreviews();
  });
});

document.addEventListener('keydown', (e) => {
  if (slider.classList.contains('active')) {
    if (e.keyCode === 37) {
      if (currentIndex === 0) currentIndex = images.length;
      slider.querySelector('.image-container img').src = images[currentIndex - 1].src.split('-min')[0] + '.jpg';
      currentIndex--;

      changeSliderPreviews();
    }

    if (e.keyCode === 39) {
      if (currentIndex === images.length-1) currentIndex = -1;
      slider.querySelector('.image-container img').src = images[currentIndex + 1].src.split('-min')[0] + '.jpg';
      currentIndex++;

      changeSliderPreviews();
    }
  }
});

slider.querySelector('.row-1').addEventListener('click', (e) => {
  if (e.target.classList.contains('row-1')) {
    slider.style.display = 'none';
    document.body.style.overflow = '';
  }
});
