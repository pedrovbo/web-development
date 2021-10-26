function isBigEnough(value){
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);//retornará apenas os valores maiores que 10

console.log(filtered);
