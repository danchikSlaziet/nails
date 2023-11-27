const firstPage = document.querySelector('.first-page');
const firstPageButton = firstPage.querySelector('.first-page__button');
const secondPage = document.querySelector('.second-page');
const secondPageButton = secondPage.querySelector('.second-page__button');
const secondPageInput = secondPage.querySelector('.second-page__input');
const secondPageLabel = secondPage.querySelector('.second-page__label');
const secondPageText = secondPage.querySelector('.second-page__text');
const thirdPage = document.querySelector('.third-page');
const thirdPageButton = thirdPage.querySelector('.third-page__button');
const fourthPage = document.querySelector('.fourth-page');
const fourthPageVideo = fourthPage.querySelector('.fourth-page__video');
const fourthPageButton = fourthPage.querySelector('.fourth-page__button');
const fourthPageInfo = fourthPage.querySelector('.fourth-page__info');
const fourthPageTextChoose = fourthPage.querySelector('.fourth-page__text_choose');
const fourthPageScreen = fourthPage.querySelector('.fourth-page__screen');
const nailButtons = fourthPage.querySelectorAll('.fourth-page__circle');
const finalPage = document.querySelector('.final-page');
const finalPageIMG = finalPage.querySelector('.final-page__img');
const finalPageSendButton = finalPage.querySelector('.final-page__send-button');
const finalPageBackButton = finalPage.querySelector('.final-page__back-button');


// additional constants for debug and help
const hiddenIMG = document.querySelector('.hidden-image');
const nailsSliced = document.querySelector('.nails-sliced');

const botToken = '6899155059:AAEaXDEvMiL7qstq_9BFQ59fEXGo-mcF1hU';
let userChatId = '';
const photoPath = './images/logo.png';
const apiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

let detect = new MobileDetect(window.navigator.userAgent);

function parseQuery(queryString) {
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

window.addEventListener('DOMContentLoaded', () => {
  let app = window.Telegram.WebApp;
  let query = app.initData;
  let user_data_str = parseQuery(query).user;
  let user_data = JSON.parse(user_data_str)
  app.expand();
  app.ready();
  userChatId = user_data["id"];
});

document.addEventListener('click', function(event) {
  // Проверяем, был ли клик вне элемента input
  var isClickInsideInput = event.target.tagName === 'INPUT';
  
  // Если клик был вне элемента input, скрываем клавиатуру
  if (!isClickInsideInput) {
    document.activeElement.blur(); // Снимаем фокус с активного элемента (в данном случае, инпута)
  }
});

console.log(detect.os());

// if (detect.os() === 'iOS') {
//   fourthPageButton.textContent = 'Продолжить'
// }

const phoneMask = new IMask(secondPageInput, {
  mask: "+{7} (000) 000-00-00",
});

function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    secondPageButton.disabled = false;
  } else {
    secondPageButton.disabled = true;
  }
}

secondPageInput.addEventListener('input', () => {
  phoneInputHandler();
})

secondPageInput.addEventListener('focus', () => {
  if (detect.os() === 'iOS') {
    secondPageInput.style.transform = 'translateY(-90px)';
    secondPageLabel.style.transform = 'translateY(-90px)';
    secondPageButton.style.transform = 'translateY(-90px)';
    secondPageText.style.transform = 'translateY(-90px)'; 
  }
});

secondPageInput.addEventListener('blur', () => {
  if (detect.os() === 'iOS') {
    secondPageInput.style.transform = 'translateY(0)';
    secondPageLabel.style.transform = 'translateY(0)';
    secondPageText.style.transform = 'translateY(0)';
    secondPageButton.style.transform = 'translateY(0)';
    window.scrollTo({top: 0, behavior: "smooth"});
  }
});


firstPageButton.addEventListener('click', () => {
  firstPage.classList.add('first-page_disabled');
  secondPage.classList.remove('second-page_disabled');
  if (detect.os() === 'iOS') {
    startCamera();
  }
});

secondPageButton.addEventListener('click', () => {
  secondPage.classList.add('second-page_disabled');
  thirdPage.classList.remove('third-page_disabled');
  secondPageInput.addEventListener('blur', () => {
    if (detect.os() === 'iOS') {
      secondPageInput.style.transform = 'translateY(0)';
      secondPageLabel.style.transform = 'translateY(0)';
      secondPageText.style.transform = 'translateY(0)';
      secondPageButton.style.transform = 'translateY(0)';
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  });
});

thirdPageButton.addEventListener('click', () => {
  thirdPage.classList.add('third-page_disabled');
  fourthPage.classList.remove('fourth-page_disabled');
});

async function sendPhoto(assetElement) {
  // Получение ссылки на изображение
  const imageURL = assetElement.src;

  finalPageSendButton.textContent = 'Отправка ...';

  // Загрузка изображения в бинарном формате
  const response = await fetch(imageURL);
  const imageBlob = await response.blob();

  // Формируем объект FormData для отправки файла
  const formData = new FormData();
  formData.append('chat_id', userChatId);
  formData.append('photo', imageBlob, 'photo.jpg');

  // Формируем URL для отправки фотографии
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

  // Отправка фотографии на сервер Telegram
  try {
      const result = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
      });
      const data = await result.json();
      console.log(data);
      if (data.ok) {
          console.log('Фотография успешно отправлена в Telegram.');
          finalPageSendButton.textContent = 'Отправлено';
      } else {
          console.error('Произошла ошибка при отправке фотографии.');
          finalPageSendButton.textContent = 'Ошибка';
      }
  } catch (error) {
      console.error('Ошибка:', error);
      finalPageSendButton.textContent = 'Ошибка';
  }
}

finalPageSendButton.addEventListener('click', () => {
  sendPhoto(finalPageIMG);
})

fourthPageButton.addEventListener('click', () => { 
  if (detect.os() === 'iOS') {
    startCamera();
    // if (fourthPageButton.disabled) {
    //   fourthPageButton.textContent = 'Сохранить';
    // }
  }
  if (fourthPageInfo.className.includes('disabled')) {
  

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    const scaleFactor = 2;
    tempCanvas.width = fourthPageVideo.clientWidth*scaleFactor;
    tempCanvas.height = fourthPageVideo.clientHeight*scaleFactor;

    const leftSmech = (fourthPageVideo.clientWidth - fourthPageScreen.clientWidth)/2;


    tempCtx.drawImage(fourthPageVideo, 0, 0, tempCanvas.width, tempCanvas.height);

    tempCtx.drawImage(
          nailsSliced,
          (nailsSliced.offsetLeft + leftSmech)*scaleFactor,
          nailsSliced.offsetTop*scaleFactor,
          nailsSliced.width*scaleFactor,
          nailsSliced.height*scaleFactor
        ); 

    const dataURL = tempCanvas.toDataURL('image/png', 1.0);

    hiddenIMG.width = fourthPageVideo.clientWidth;
    hiddenIMG.height = fourthPageVideo.clientHeight;
    hiddenIMG.src = dataURL;
    finalPageIMG.src = dataURL;

    fourthPage.classList.add('fourth-page_disabled');
    finalPage.classList.remove('final-page_disabled');
  }
});

nailButtons.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    fourthPageButton.style.opacity = '1';
    fourthPageButton.disabled = "";
    if (detect.os() === 'iOS' && !fourthPageInfo.className.includes('disabled')) {
      stopCamera();
    }
    switch (index) {
      case 0:
        nailButtons[0].src = './images/nail-circle-1-active.svg';
        nailButtons[1].src = './images/nail-circle-2.svg';
        nailButtons[2].src = './images/nail-circle-3.svg';
        nailsSliced.src = './images/red.png';
        break;
      case 1:
        nailButtons[1].src = './images/nail-circle-2-active.svg';
        nailButtons[0].src = './images/nail-circle-1.svg';
        nailButtons[2].src = './images/nail-circle-3.svg';
        nailsSliced.src = './images/blue.png';
        break;
      case 2:
        nailButtons[2].src = './images/nail-circle-3-active.svg';
        nailButtons[1].src = './images/nail-circle-2.svg';
        nailButtons[0].src = './images/nail-circle-1.svg';
        nailsSliced.src = './images/gray.png';
        break;
    
      default:
        break;
    }
    if (!fourthPageVideo.className.includes('active')) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
          nailsSliced.style.opacity = 1;
          fourthPageVideo.srcObject = stream;
          fourthPageInfo.classList.add('fourth-page__info_disabled');
          fourthPageTextChoose.style.display = 'none';
      })
      .catch((error) => {
          console.error('Ошибка доступа к камере:', error);
      });
    }
    fourthPageVideo.classList.add('fourth-page__video_active');
  });
});

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
          fourthPageVideo.srcObject = stream;
          if (!fourthPage.className.includes('disabled') && fourthPageButton.disabled) {
            fourthPageInfo.classList.add('fourth-page__info_disabled');
          }
      })
      .catch((error) => {
          console.error('Ошибка доступа к камере:', error);
      });
}

function stopCamera() {
  const stream = fourthPageVideo.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(track => track.stop());

  fourthPageVideo.srcObject = null;
}

finalPageBackButton.addEventListener('click', () => {
  finalPage.classList.add('final-page_disabled');
  fourthPage.classList.remove('fourth-page_disabled');
  finalPageSendButton.textContent = 'Отправить';
});