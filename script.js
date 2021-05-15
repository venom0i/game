const gaster = document.getElementById("gaster");
const ship = document.getElementById("ship");

alert('готовы?')

function TimeOverOne() {
    alert('пошла жара!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    ship.style.animation = 'shipMov 0.6s infinite linear' 
}

function TimeOverTwo() {
    alert('пошла жара!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    ship.style.animation = 'shipMov 0.5s infinite linear' 
}

setTimeout(TimeOverOne,10000)

setTimeout(TimeOverTwo,20000)


document.addEventListener("keydown", function(event){
    jump();
})

function jump () {
    if (gaster.classList != jump) {
        gaster.classList.add("jump");
    }
    setTimeout (function(){
        gaster.classList.remove("jump")
    }, 400)
}

let isAlive = setInterval (function(){
    let gasterTop = parseInt(window.getComputedStyle(gaster).getPropertyValue('top'));
    let shipLeft = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));

    if (shipLeft < 60 && shipLeft > 0 && gasterTop >= -30) {
        alert('проиграло')
    }
})

