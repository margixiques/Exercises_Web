function print(argument) {
    document.getElementById('result_label')
    document.write(argument)
    simpleLineBreak()
}

function simpleLineBreak() {
    document.write("<br>")
}

function randomFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


var username = prompt("Indique su nombre")
var numberN = parseInt(prompt("Ingrese un número")) 
var randomNumber = randomFunction(0,numberN) 
var limit = 3
var counter = 1

while (counter <= limit) {
    var userNumber = parseInt(prompt("Ingrese el número ganador")) 
    if (userNumber == randomNumber) {
        alert(username + " adivinaste en el intento " + counter + " el número era: " + randomNumber)
        break
    }  else {
        alert(username + " no acertaste, tienes " + (limit - counter) + " intento(s) más.")
    } 
    counter++
}

if (userNumber == randomNumber) {
    print(username + " adivinaste en el intento " + limit + " el número era: " + randomNumber)
}  else {
    print(username + " no acertaste, el número era: " + randomNumber)
} 

    




