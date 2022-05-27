const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const second = document.querySelector('.second');

function watch() {
    let time = new Date
    
    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    second.innerHTML = time.getSeconds()

    if (time.getHours() < 10) {
        hours.innerHTML = '0' + time.getHours()
    }else{
        hours.innerHTML = time.getHours()
    }
    if (time.getMinutes() < 10) {
        minutes.innerHTML = '0' + time.getMinutes()
    }else{
        minutes.innerHTML = time.getMinutes()
    }
    if (time.getSeconds() < 10) {
        second.innerHTML = '0' + time.getSeconds()
    }else{
        second.innerHTML = time.getSeconds()
    }

    setTimeout(() => {
        watch()
    }, 1000);
    
}
watch()

const kun = document.querySelector('.kun');
const oy = document.querySelector('.oy');
const yil = document.querySelector('.yil');

function data() {
    let sana = new Date

    kun.innerHTML = sana.getDate()
    oy.innerHTML = sana.getDay()
    yil.innerHTML = sana.getFullYear()

    if (sana.getDate() < 10) {
        kun.innerHTML = '0' + sana.getDate()
    }else{
        kun.innerHTML = sana.getDate()
    }
    if (sana.getDay() < 10) {
        oy.innerHTML = '0' + sana.getDay()
    }else{
        oy.innerHTML = sana.getDay()
    }
}
data()


