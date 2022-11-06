const eyeLeft = document.querySelector(".pupila-a")
const eyeRight = document.querySelector(".pupila-b")
const lampOne = document.querySelector(".lampara-1")
const lampTwo = document.querySelector(".lampara-2")
const lampThree = document.querySelector(".lampara-3")
const lampFour = document.querySelector(".lampara-4")
const ojoLoco =document.querySelector(".ojo-loco")
const pupilaA = document.querySelector(".pupila-a")
const pupilaB = document.querySelector(".pupila-b")

const lampOneId = document.getElementById("lampara-1")
const lampTwoId = document.getElementById("lampara-2")
const lampThreeId = document.getElementById("lampara-3")
const lampFourId = document.getElementById("lampara-4")

function activarOjosLeftA(){
    eyeLeft.classList.toggle("pupila-superior-left")
    eyeRight.classList.toggle("pupila-superior-left")
    bloqueDos()
    bloquetres()
    bloqueCuatro()
    lampOne.classList.toggle("lampara-1-active")
    bloqueOjoLoco()
}
function activarOjosRightA(){
    bloqueUno()
    eyeLeft.classList.toggle("pupila-superior-right")
    eyeRight.classList.toggle("pupila-superior-right")
    bloquetres()
    bloqueCuatro()
    lampTwo.classList.toggle("lampara-2-active")
    bloqueOjoLoco()
}
function activarOjosLeftB(){
    bloqueUno()
    bloqueDos()
    eyeLeft.classList.toggle("pupila-inferior-left")
    eyeRight.classList.toggle("pupila-inferior-left")
    bloqueCuatro()
    lampThree.classList.toggle("lampara-3-active")
    bloqueOjoLoco()
}
function activarOjosRightB(){
    bloqueUno()
    bloqueDos()
    bloquetres()
    eyeLeft.classList.toggle("pupila-inferior-right")
    eyeRight.classList.toggle("pupila-inferior-right")
    lampFour.classList.toggle("lampara-4-active")
    bloqueOjoLoco()
}

function bloqueUno(){
    eyeLeft.classList.toggle("pupila-superior-left",false)
    eyeRight.classList.toggle("pupila-superior-left",false)
    lampOne.classList.toggle("lampara-1-active",false)
}
function bloqueDos(){
    eyeLeft.classList.toggle("pupila-superior-right",false)
    eyeRight.classList.toggle("pupila-superior-right",false)
    lampTwo.classList.toggle("lampara-2-active",false)
}
function bloquetres(){
    eyeLeft.classList.toggle("pupila-inferior-left",false)
    eyeRight.classList.toggle("pupila-inferior-left",false)
    lampThree.classList.toggle("lampara-3-active",false)
}
function bloqueCuatro(){
    eyeLeft.classList.toggle("pupila-inferior-right",false)
    eyeRight.classList.toggle("pupila-inferior-right",false)
    lampFour.classList.toggle("lampara-4-active",false)
}

let acum = 0;
function activeOjoLoco(){
    bloqueUno()
    bloqueDos()
    bloquetres()
    bloqueCuatro()
    let value = ojoLoco.classList.toggle("ojo-loco-active")
    pupilaA.classList.toggle("pupila-a-loca")
    pupilaB.classList.toggle("pupila-b-loca")
    if(value)
    {
        lampOneId.style.display = "none";
        lampTwoId.style.display = "none";
        lampThreeId.style.display = "none";
        lampFourId.style.display = "none";
    }else{
        lampOneId.style.display = "flex";
        lampTwoId.style.display = "flex";
        lampThreeId.style.display = "flex";
        lampFourId.style.display = "flex";
    }

}
function bloqueOjoLoco(){
    ojoLoco.classList.toggle("ojo-loco-active",false)
    pupilaA.classList.toggle("pupila-a-loca",false)
    pupilaB.classList.toggle("pupila-b-loca",false)
}