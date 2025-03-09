// querySelector - получение конкретного элемента из html
const hour = document.querySelector('.h');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');

const hoursNum = document.querySelector('.hours');
const minNum = document.querySelector('.minutes');
// Функция для запуска часов 
minNum.addEventListener('click', () => {

})

function clock() {
    const time = new Date();
    const second = time.getSeconds() * 6;
    const minutes = time.getMinutes() * 6;
    const hours = time.getHours() * 30;
    // 
    sec.style = `transform: rotate(${second}deg);`;
    min.style = `transform: rotate(${minutes}deg);`;
    hour.style = `transform: rotate(${hours}deg);`;
    // innerHTML 

    // if (time.getSeconds() < 10) {
    //     secNum.innerHTML = '0' + time.getSeconds();
    // } else {
    //     secNum.innerHTML = time.getSeconds();
    // }
    // ? : - тернарные операторы
    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    // 
    setTimeout(() => {
        clock();
    }, 1000);

}

clock();


// const stopWatchBtn = document.querySelector('.stopwatch__btn');

// stopWatchBtn.addEventListener('click', () => {
//     // if (stopWatchBtn.innerHTML == 'start') {
//     //     stopWatchBtn.innerHTML = 'stop';
//     // } else {
//     //     stopWatchBtn.innerHTML = 'start';
//     // }
//     stopWatchBtn.innerHTML = stopWatchBtn.innerHTML == 'start' ? 'stop' : 'start';
// });

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (let ix = 0; ix < links.length; ix++) {
            links[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        tab(links[i], tabs[i]);
    });

}

function tab(link, content) {
    link.classList.add('active');
    content.classList.add('active');
}

// Секундомер 

const watchBtn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minutesWatch = document.querySelector('.stopwatch__minutes'),
    hoursWatch = document.querySelector('.stopwatch__hours'),
    watchInfo = document.querySelector('.tabsLink__span');

watchBtn.addEventListener('click', () => {
    if (watchBtn.innerHTML == 'start') {
        watchBtn.innerHTML = 'stop';
        watchInfo.classList.add('active');

        let i = 0;

        setTimeout(() => {
            stopWatch(watchBtn, i);
        }, 1000);

    } else if (watchBtn.innerHTML == 'stop') {
        watchInfo.classList.remove('active');
        watchInfo.classList.add('active_clear');
        watchBtn.innerHTML = 'clear';
    } else {
        watchInfo.classList.remove('active_clear');
        watchBtn.innerHTML = 'start';
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
        secondWatch.innerHTML = 0;
    }
});

function stopWatch(el, i) {

    if (el.innerHTML == 'stop') {
        if (i == 60) {
            i = 0;
            secondWatch.innerHTML = i;
            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            } else {
                minutesWatch.innerHTML++;
            }
        } else {
            i++;
            secondWatch.innerHTML = i;
        }
        setTimeout(() => {
            stopWatch(el, i);
        }, 1000);
    }
}