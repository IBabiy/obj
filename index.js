var city1 = {}
city1.name = 'ГородN'
city1.population = 10000000

var city2 = {
    name: 'ГородM', 
    population: 1000000
}
for (key in city1){
    console.log(key + ":" + city1[key])
}

for (key in city2){
    console.log(key + ":" + city2[key])
}

city1.getName = function(){
    console.log("Функция getName возвращает: " + city1.name)
}

city2.getName = function(){
    console.log("Функция getName возвращает: " + city2.name)
}

city2.getName()
city1.getName()

