let examGrade = prompt("Puan Girin:")
let textInfo;

if(examGrade <= 100 && examGrade >= 0){
    if(examGrade >= 90){
        textInfo = "A"
    }else if (examGrade >= 85){
        textInfo = "A-"
    }else if (examGrade >= 80){
        textInfo = "B+"
    }else if (examGrade >= 75){
        textInfo = "B"
    }else if (examGrade >= 65){
        textInfo = "B-"
    }else if (examGrade >= 60){
        textInfo = "C+"
    }else if (examGrade >= 55){
        textInfo = "C"
    }else if (examGrade >= 50){
        textInfo = "C-"
    }else if (examGrade >= 45){
        textInfo = "D+"
    }else if (examGrade >= 40){
        textInfo = "D"
    }else if (examGrade >= 35){
        textInfo = "D-"
    }else if (examGrade < 35){
        textInfo = "F"
    }
}else{
    textInfo = "Yanlış Bilgi"
}

let info = document.querySelector("#harf-notu")
info.innerHTML += `${textInfo}`
