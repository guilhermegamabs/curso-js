const num = [1,2,3,4,5,6,7,8,9];


for (let numero of num){
    if(numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    if(numero === 7) {
        console.log('7 encontrado, siando...');
        break;
    }
    console.log(numero);
}
