let textInfo = prompt("Adınız:")
let info = document.querySelector("#myName")
let clock = document.querySelector("#myClock")

info.innerHTML = `${textInfo}`

function time() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let wd = d.getDay()

    let day = ""

    switch(wd){
        case 0:
            day = "Pazar"
            break
        case 1:
            day = "Pazartesi"
            break
        case 2:
            day = "Salı"
            break
        case 3:
            day = "Çarşamba"
            break
        case 4:
            day = "Perşembe"
            break
        case 5:
            day = "Cuma"
            break
        case 6:
            day = "Cumartesi"
            break
        default:
            day = ""
            break
    }

    clock.innerHTML = `${("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " " + day}`
}

setInterval(time, 1000);