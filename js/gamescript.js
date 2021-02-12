(function() {

//Слайдер

let offset = 0;
const sliderRow = document.querySelector('.slider-row');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');

sliderNext.addEventListener('click', function () {
  offset = offset + 186;
  if (offset > 494) {
    offset = 0;
  }
  sliderRow.style.left = -offset + 'px';
});

sliderPrev.addEventListener('click', function () {
  offset = offset - 186;
  if (offset < 0) {
    offset = 494;
  }
  sliderRow.style.left = -offset + 'px';
});


//Движение девушки по точкам

let player = document.querySelector('.woman');
let play = document.querySelector('.to-university-button');

let dotsLocation = ['one-anim', 'two-anim', 'three-anim', 'four-anim', 'five-anim', 'six-anim','seven-anim', 'eight-anim', 'nine-anim', 'ten-anim', 'eleven-anim', 'twelve-anim','thirteen-anim', 'fourteen-anim', 'fifteen-anim', 'sixteen-anim', 'seventeen-anim', 'eighteen-anim', 'nineteen-anim','twenty-anim', 'twentyone-anim', 'twentytwo-anim', 'twentythree-anim', 'twentyfour-anim', 'twentyfive-anim','twentysix-anim', 'twentyseven-anim', 'twentyeight-anim', 'twentynine-anim', 'thirty-anim', 'thirtyone-anim','thirtytwo-anim', 'thirtythree-anim', 'thirtyfour-anim', 'thirtyfive-anim', 'thirtysix-anim', 'thirtyseven-anim','thirtyeight-anim', 'thirtynine-anim', 'fourty-anim', 'fourtyone-anim', 'fourtytwo-anim', 'fourtythree-anim','fourtyfour-anim', 'fourtyfive-anim', 'fourtysix-anim', 'fourtyseven-anim', 'fourtyeight-anim', 'fourtynine-anim','fifty-anim', 'fiftyone-anim', 'fiftytwo-anim', 'fiftythree-anim'];

let index = 0;
player.classList.add(dotsLocation[index][0]);
play.onclick = () => {
    dotsLocation[index];
    if (index === dotsLocation.length - 1)
        index = 0;
    else
        ++index;
    player.classList.toggle(dotsLocation[index]);
};

//Выдвижное окно

let usersWindow = document.querySelector('.window-wrap');
let showWindow = document.querySelector('.rating-button');
let hideWindow = document.querySelector('.exit-button');
let wall = document.querySelector('.gray-wall');

showWindow.addEventListener('click', function () {
  usersWindow.classList.add('make-anim-window');
  wall.classList.add('add-anim-gray');
});

hideWindow.addEventListener('click', function () {
  usersWindow.classList.remove('make-anim-window');
  wall.classList.remove('add-anim-gray');
});

// Прогрузка даных из файла объекта

const renderHtmlByData = (data) => {
    let html = window.data.data.rating.reduce((acc, el) => {
        return acc + `<div class="rating-text-down">
             <p class="rating-number-place">${el.id}</p>
              <img src="${el.img}" width="28" height="28" alt="friend-icon" class="player-photo-place">
              <p class="rating-name-place">${el.name} ${el.lastName}</p>
              <p class="rating-exp-place">${el.points}</p>
</div>`;
    }, '');
    document.querySelector('.week-text').innerHTML = html;
    document.querySelector('.main-text').innerHTML = html;
};

renderHtmlByData(data);

//проверка - друг или не друг

let nameField = document.querySelectorAll('.rating-name-place');

let checkFits = window.data.data.friends.reduce((saved, f) => {
  nameField.forEach(function(elem){
    if (elem.textContent == f.name + ' ' + f.lastName) {
      elem.style.textShadow = '0px 0px 10px #ff0000';
      elem.style.color = '#F8FF5C';
    }
  });
}, '');

})();
