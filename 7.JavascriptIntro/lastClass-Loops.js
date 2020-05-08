var toDos = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'

]

for (let i = 0; i < toDos.length; i++) {
    toDos[i] = toDos[i] + "!"
}


var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne)
    counterOne++
}

var counter2 = 10;
do {
    console.log(counter2)
    counter2--
} while (counter2 > 0)

toDos.forEach(function (todo,i) {
    console.log(todo, i)
})