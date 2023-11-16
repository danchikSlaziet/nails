const firstPage = document.querySelector('.first-page');
const firstPageButton = firstPage.querySelector('.first-page__button');
const secondPage = document.querySelector('.second-page');
const secondPageButton = secondPage.querySelector('.second-page__button');
const thirdPage = document.querySelector('.third-page');
const thirdPageButton = thirdPage.querySelector('.third-page__button');
const fourthPage = document.querySelector('.fourth-page');
const fourthPageVideo = fourthPage.querySelector('.fourth-page__video');
const fourthPageButton = fourthPage.querySelector('.fourth-page__button');
const fourthPageInfo = fourthPage.querySelector('.fourth-page__info');
const nails = fourthPage.querySelectorAll('.fourth-page__nail');
const nailButtons = fourthPage.querySelectorAll('.fourth-page__circle');


firstPageButton.addEventListener('click', () => {
  firstPage.classList.add('first-page_disabled');
  secondPage.classList.remove('second-page_disabled');
});

secondPageButton.addEventListener('click', () => {
  secondPage.classList.add('second-page_disabled');
  thirdPage.classList.remove('third-page_disabled');
});

thirdPageButton.addEventListener('click', () => {
  thirdPage.classList.add('third-page_disabled');
  fourthPage.classList.remove('fourth-page_disabled');
});

nailButtons.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    switch (index) {
      case 0:
        nailButtons[0].src = './images/nail-circle-1-active.svg';
        nailButtons[1].src = './images/nail-circle-2.svg';
        nailButtons[2].src = './images/nail-circle-3.svg';
        nails.forEach((nail, index) => {
          nail.src = `./images/red-${index + 1}.png`;
        });
        break;
      case 1:
        nailButtons[1].src = './images/nail-circle-2-active.svg';
        nailButtons[0].src = './images/nail-circle-1.svg';
        nailButtons[2].src = './images/nail-circle-3.svg';
        nails.forEach((nail, index) => {
          nail.src = `./images/blue-${index + 1}.png`;
        });
        break;
      case 2:
        nailButtons[2].src = './images/nail-circle-3-active.svg';
        nailButtons[1].src = './images/nail-circle-2.svg';
        nailButtons[0].src = './images/nail-circle-1.svg';
        nails.forEach((nail, index) => {
          nail.src = `./images/gray-${index + 1}.png`;
        });
        break;
    
      default:
        break;
    }
    if (!fourthPageVideo.className.includes('active')) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
          fourthPageVideo.srcObject = stream;
          fourthPageInfo.classList.add('fourth-page__info_disabled');
          nails.forEach((nail) => {
            nail.classList.add('fourth-page__nail_active');
          });
      })
      .catch((error) => {
          console.error('Ошибка доступа к камере:', error);
      });
    }
    fourthPageVideo.classList.add('fourth-page__video_active');
  });
});