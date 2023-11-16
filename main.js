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

nailButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    fourthPageVideo.classList.add('fourth-page__video_active');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
          fourthPageVideo.srcObject = stream;
          nails.forEach((nail) => {
            fourthPageInfo.classList.add('fourth-page__info_disabled');
            nail.classList.add('fourth-page__nail_active');
          });
      })
      .catch((error) => {
          console.error('Ошибка доступа к камере:', error);
      });
  });
});