

const firstPage = document.querySelector('.first-page');
const firstPageButton = firstPage.querySelector('.first-page__button');
const secondPage = document.querySelector('.second-page');
const secondPageButton = secondPage.querySelector('.second-page__button');
const secondPageBack = secondPage.querySelector('.second-page__back');
const secondPage2 = document.querySelector('.second-page-2');
const secondPage2Button = secondPage2.querySelector('.second-page-2__button');
const secondPage2Back = secondPage2.querySelector('.second-page-2__back');
const secondPage3 = document.querySelector('.second-page-3');
const secondPage3Button = secondPage3.querySelector('.second-page-3__button');
const secondPage3Back = secondPage3.querySelector('.second-page-3__back');
// const secondPageInput = secondPage.querySelector('.second-page__input');
// const secondPageLabel = secondPage.querySelector('.second-page__label');
// const secondPageText = secondPage.querySelector('.second-page__text');
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
const finalPageBack = finalPage.querySelector('.final-page__back');
const finalPageButton = finalPage.querySelector('.final-page__button');
// const finalPageIMG = finalPage.querySelector('.final-page__img');
const endPage = document.querySelector('.end-page');
const endPageButton = endPage.querySelector('.end-page__button');
const endPageInput = endPage.querySelector('.end-page__input');
const endPageLabel = endPage.querySelector('.end-page__label');
const endPageText = endPage.querySelector('.end-page__text');
const endPageTopText = endPage.querySelector('.end-page__top-text');
const endPageCheckContainer = endPage.querySelector('.end-page__checkbox-container');
const endPageCheckbox = endPage.querySelector('.end-page__checkbox');
const endPageArrow = endPageCheckbox.querySelector('.end-page__checkbox-arrow');

const finalPageLose = document.querySelector('.final-page-lose');
const finalPageLoseButton = finalPageLose.querySelector('.final-page-lose__button');

const infoPage = document.querySelector('.info-page');
const infoPageButton = document.querySelector('.info-page__button');



// additional constants for debug and help
const hiddenIMG = document.querySelector('.hidden-image');
const nailsSliced = document.querySelector('.nails-sliced');

const botToken = '6905480197:AAH7vIDyN7NwzdmlUlN3Fpaq5BeYwf6wuS0';
let userChatId = '';
const photoPath = './images/logo.png';
const apiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

let isAllLayersErased = false;

function startEraseGame() {
  function move5(e, percent) {
    if (percent >= 99.8)  {
      fourthPageScreen.classList.add('fourth-page__screen_active');
      setTimeout(() => {
        fourthPageScreen.classList.remove('fourth-page__screen_active');
      }, 800)
      console.log('стёрты все слои');
      this.clear();
      isAllLayersErased = true;
      fourthPage.classList.add('fourth-page_disabled');
      endPage.classList.remove('end-page_disabled');
      endPage.querySelector('.end-page__text').textContent = 'Поздравляем! Ты успешно справился с заданием! Теперь ты в конкурсе!';
    }
  }
  function move4(e, percent) {
    if (percent > 99.8)  {
      fourthPageScreen.classList.add('fourth-page__screen_active');
      setTimeout(() => {
        fourthPageScreen.classList.remove('fourth-page__screen_active');
      }, 800)
      console.log('end')
      this.clear();
      this.enable = false;
      $('#elem4').wScratchPad('clear');
      document.getElementById('elem4').style = 'display: none; pointer-events: none';
      $('#elem5').wScratchPad({
        size: 35,          // The size of the brush/scratch.
        bg: './images/nails-6.png',  // Background (image path or hex color).
        fg: './images/nails-5.png',  // Foreground (image path or hex color).
        realtime: true,       // Calculates percentage in realitime.
        scratchMove: move5,
        cursor: 'initial' // Set cursor.
      });
    }
  }
  function move3(e, percent) {
    if (percent > 99.8)  {
      fourthPageScreen.classList.add('fourth-page__screen_active');
      setTimeout(() => {
        fourthPageScreen.classList.remove('fourth-page__screen_active');
      }, 800)
      console.log('end')
      this.clear();
      this.enable = false;
      $('#elem3').wScratchPad('clear');
      document.getElementById('elem3').style = 'display: none; pointer-events: none';
      $('#elem4').wScratchPad({
        size: 35,          // The size of the brush/scratch.
        bg: './images/nails-5.png',  // Background (image path or hex color).
        fg: './images/nails-4.png',  // Foreground (image path or hex color).
        realtime: true,       // Calculates percentage in realitime.
        scratchMove: move4,
        cursor: 'initial' // Set cursor.
      });
    }
  }
  function move2(e, percent) {
    if (percent > 99.8)  {
      fourthPageScreen.classList.add('fourth-page__screen_active');
      setTimeout(() => {
        fourthPageScreen.classList.remove('fourth-page__screen_active');
      }, 800)
      console.log('end')
      this.clear();
      this.enable = false;
      $('#elem2').wScratchPad('clear');
      document.getElementById('elem2').style = 'display: none; pointer-events: none';
      $('#elem3').wScratchPad({
        size: 35,          // The size of the brush/scratch.
        bg: './images/nails-4.png',  // Background (image path or hex color).
        fg: './images/nails-3.png',  // Foreground (image path or hex color).
        realtime: true,       // Calculates percentage in realitime.
        scratchMove: move3,
        cursor: 'initial' // Set cursor.
      });
    }
  }
  function move(e, percent) {
    console.log(percent)
    if (percent > 99.8) {
      console.log('end');
      fourthPageScreen.classList.add('fourth-page__screen_active');
      setTimeout(() => {
        fourthPageScreen.classList.remove('fourth-page__screen_active');
      }, 800)
      this.clear();
      this.enable = false;
      $('#elem').wScratchPad('clear');
      document.getElementById('elem').style = 'display: none; pointer-events: none';
      $('#elem2').wScratchPad({
        size: 35,          // The size of the brush/scratch.
        bg: './images/nails-3.png',  // Background (image path or hex color).
        fg: './images/nails-2.png',  // Foreground (image path or hex color).
        realtime: true,       // Calculates percentage in realitime.
        scratchMove: move2,
        cursor: 'initial' // Set cursor.
      });
      
    }
  }
  
  $('#elem').wScratchPad({
    size: 35,          // The size of the brush/scratch.
    bg: './images/nails-2.png',  // Background (image path or hex color).
    fg: './images/nails-1.png',  // Foreground (image path or hex color).
    realtime: true,       // Calculates percentage in realitime.
    scratchMove: move,
    cursor: 'initial' // Set cursor.
  });
}
startEraseGame();


function restartEraseGame() {
  $('#elem').wScratchPad('reset');
  $('#elem2').wScratchPad('reset');
  $('#elem3').wScratchPad('reset');
  fourthPageScreen.innerHTML = `
    <p class="fourth-page__screen-text">
      Стирай маникюр пока<br>время не остановилось 
    </p>
    <div class="fourth-page__screen-time-block">
      <img class="fourth-page__screen-round" src="./images/time-round.svg" alt="">
      <p id="basicUsage" class="fourth-page__screen-time-seconds">30</p>
      <p class="fourth-page__screen-time-sec">sec</p>
    </div>
    <div id="elem">
    </div>
    <div id="elem2">
    </div>
    <div id="elem3">
    </div>
    <div id="elem4">
    </div>
    <div id="elem5">
    </div>
    <img id="hand" src="./images/hand.png" alt="">
  `;
  startEraseGame();
}

// ================ FETCH ==================

class Api {
  constructor({baseUrl, secondUrl, thirdUrl, fourthUrl}) {
    this._baseUrl = baseUrl;
    this._secondUrl = secondUrl;
    this._thirdUrl = thirdUrl;
    this._fourthUrl = fourthUrl;
  }

  _getFetch(url, options) {
    return fetch(url, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      });
  }

  sendStatistics(data, name) {
    let params;
    if (data["last_name"] === '' && data["username"] === '') {
      params = {
        "name": name,
        "id": parseInt(data["id"]),
        "first_name": data["first_name"],
      }
    }
    else if (data["last_name"] !== '' && data["username"] === '') {
      params = {
        "name": name,
        "id": parseInt(data["id"]),
        "first_name": data["first_name"],
        "last_name": data["last_name"]
      }
    }
    else if (data["last_name"] === '' && data["username"] !== '') {
      params = {
        "name": name,
        "id": parseInt(data["id"]),
        "first_name": data["first_name"],
        "username": data["username"]
      }
    }
    else if (data["last_name"] !== '' && data["username"] !== '') {
      params = {
        "name": name,
        "id": parseInt(data["id"]),
        "first_name": data["first_name"],
        "username": data["username"],
        "last_name": data["last_name"]
      }
    }
    const url = this._baseUrl;
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(params)
    }
    return this._getFetch(url, options);
  }

  sendFileId(id, fileId) {
    const params = {
      "id": id,
      "file_id": fileId
    }
    const url = this._secondUrl;
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(params)
    }
    return this._getFetch(url, options);
  }

  postNumber(id, number) {
    const params = {
      "id": id,
      "number": number
    }
    const url = this._fourthUrl;
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(params)
    }
    return this._getFetch(url, options);
  }

  getNumber(id) {
    const url = this._thirdUrl + `?id=${id}`;
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }
    return this._getFetch(url, options);
  }
}

const api = new Api({
  baseUrl: 'https://nails.ilovebot.ru/api/statistics',
  secondUrl: 'https://nails.ilovebot.ru/api/save_file',
  thirdUrl: 'https://nails.ilovebot.ru/api/get_number',
  fourthUrl: 'https://nails.ilovebot.ru/api/set_number'
});

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

let userData;
let firstTime = true;

window.addEventListener('DOMContentLoaded', () => {
  let app = window.Telegram.WebApp;
  let query = app.initData;
  let user_data_str = parseQuery(query).user;
  let user_data = JSON.parse(user_data_str);
  userData = user_data;
  app.expand();
  app.ready();
  userChatId = user_data["id"];

  api.getNumber(parseInt(userChatId))
    .then((data) => {
      console.log(data);
      if (data === 'Номер есть') {
        firstTime = false;
      }
    })
    .catch(err => console.log(err));

  api.sendStatistics(user_data, 'открытие приложения')
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

document.addEventListener('click', function(event) {
  // Проверяем, был ли клик вне элемента input
  var isClickInsideInput = event.target.tagName === 'INPUT';
  
  // Если клик был вне элемента input, скрываем клавиатуру
  if (!isClickInsideInput) {
    document.activeElement.blur(); // Снимаем фокус с активного элемента (в данном случае, инпута)
  }
});

// if (detect.os() === 'iOS') {
//   fourthPageButton.textContent = 'Продолжить';
// }

console.log(detect.os());

// if (detect.os() === 'iOS') {
//   fourthPageButton.textContent = 'Продолжить'
// }

const phoneMask = new IMask(endPageInput, {
  mask: "+{7} (000) 000-00-00",
});

function phoneInputHandler() {
  if (phoneMask.masked.isComplete && endPageArrow.className.includes('active')) {
    endPageButton.classList.add('end-page__button_active');
  } else {
    endPageButton.classList.remove('end-page__button_active');
  }
}

endPageInput.addEventListener('input', () => {
  phoneInputHandler();
  api.sendStatistics(userData, 'нажатие на "инпут(ввод номера телефона)" на экране с номером телефона')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

endPageInput.addEventListener('focus', () => {
  if (detect.os() === 'iOS') {
    endPageInput.style.transform = 'translateY(-120px)';
    endPageLabel.style.transform = 'translateY(-120px)';
    endPageButton.style.transform = 'translateY(-120px)';
    endPageText.style.transform = 'translateY(-120px)';
    endPageTopText.style.transform = 'translateY(-120px)';
  }
});

endPageInput.addEventListener('blur', () => {
  if (detect.os() === 'iOS') {
    endPageInput.style.transform = 'translateY(0)';
    endPageLabel.style.transform = 'translateY(0)';
    endPageText.style.transform = 'translateY(0)';
    endPageButton.style.transform = 'translateY(0)';
    endPageTopText.style.transform = 'translateY(0)';
    window.scrollTo({top: 0, behavior: "smooth"});
  }
});

endPageCheckContainer.addEventListener('click', () => {
  api.sendStatistics(userData, 'нажатие на чекбокс на экране с номером телефона')
    .then(data => console.log(data))
    .catch(err => console.log(err));
  endPageArrow.classList.toggle('end-page__checkbox-arrow_active');
  if (endPageArrow.className.includes('active') && phoneMask.masked.isComplete) {
    endPageButton.classList.add('end-page__button_active');
  }
  else {
    endPageButton.classList.remove('end-page__button_active');
  }
})


firstPageButton.addEventListener('click', () => {
  api.sendStatistics(userData, 'нажатие на кнопку "далее" на 1 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
  firstPage.classList.add('first-page_disabled');
  secondPage.classList.remove('second-page_disabled');
});

secondPageBack.addEventListener('click', () => {
  secondPage.classList.add('second-page_disabled');
  firstPage.classList.remove('first-page_disabled');
  api.sendStatistics(userData, 'нажатие на кнопку "назад" на 2 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})
secondPage2Back.addEventListener('click', () => {
  secondPage2.classList.add('second-page-2_disabled');
  secondPage.classList.remove('second-page_disabled');
  api.sendStatistics(userData, 'нажатие на кнопку "назад" на 3 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})
secondPage3Back.addEventListener('click', () => {
  secondPage3.classList.add('second-page-3_disabled');
  secondPage2.classList.remove('second-page-2_disabled');
  api.sendStatistics(userData, 'нажатие на кнопку "назад" на 4 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

secondPageButton.addEventListener('click', () => {
  secondPage.classList.add('second-page_disabled');
  secondPage2.classList.remove('second-page-2_disabled');
  api.sendStatistics(userData, 'нажатие на кнопку "дальше" на 2 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

secondPage2Button.addEventListener('click', () => {
  secondPage2.classList.add('second-page-2_disabled');
  secondPage3.classList.remove('second-page-3_disabled');
  api.sendStatistics(userData, 'нажатие на кнопку "дальше" на 3 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

var timerInstance = new easytimer.Timer();

secondPage3Button.addEventListener('click', () => {
  secondPage3.classList.add('second-page-3_disabled');
  fourthPage.classList.remove('fourth-page_disabled');
  timerInstance.start({
    startValues: {
      seconds: 30
    },
    countdown: true,
  });
  timerInstance.addEventListener('secondsUpdated', function (e) {
      $('#basicUsage').html(timerInstance.getTimeValues().seconds);
  });
  api.sendStatistics(userData, 'нажатие на кнопку "Старт" на 4 экране')
    .then(data => console.log(data))
    .catch(err => console.log(err));
})


// secondPageButton.addEventListener('click', () => {
//   secondPage.classList.add('second-page_disabled');
//   thirdPage.classList.remove('third-page_disabled');
  // api.postNumber(parseInt(userData["id"]), secondPageInput.value)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));
//   api.sendStatistics(userData, 'нажатие на кнопку "проверить подписку МТС premium" на экране с номером телефона')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//   // secondPageInput.addEventListener('blur', () => {
//   //   if (detect.os() === 'iOS') {
//   //     secondPageInput.style.transform = 'translateY(0)';
//   //     secondPageLabel.style.transform = 'translateY(0)';
//   //     secondPageText.style.transform = 'translateY(0)';
//   //     secondPageButton.style.transform = 'translateY(0)';
//   //     window.scrollTo({top: 0, behavior: "smooth"});
//   //   }
//   // });
// });


timerInstance.addEventListener('stopped', () => {
  fourthPage.classList.add('fourth-page_disabled');
  if (!isAllLayersErased) {
    finalPageLose.classList.remove('final-page-lose_disabled');
  }
  else {
    endPage.classList.remove('end-page_disabled');
  }
})
finalPageLoseButton.addEventListener('click', () => {
  finalPageLose.classList.add('final-page-lose_disabled');
  fourthPage.classList.remove('fourth-page_disabled');
  timerInstance.reset();
  restartEraseGame();
})
finalPageButton.addEventListener('click', () => {
  finalPage.classList.add('final-page_disabled');
  fourthPage.classList.remove('fourth-page_disabled');
  timerInstance.reset();
  restartEraseGame();
  isAllLayersErased = false;
})

finalPageBack.addEventListener('click', () => {
  endPage.classList.remove('end-page_disabled');
  finalPage.classList.add('final-page_disabled');
})

endPageButton.addEventListener('click', () => { 
  api.sendStatistics(userData, 'нажатие на кнопку "Отправить" на экране с номером телефона')
    .then(data => console.log(data))
    .catch(err => console.log(err));
  api.postNumber(parseInt(userData["id"]), endPageInput.value)
  .then(data => console.log(data))
  .catch(err => console.log(err));
    if  (endPageButton.className.includes('active')) {
      endPage.classList.add('end-page_disabled');
      finalPage.classList.remove('final-page_disabled');
    }
})
