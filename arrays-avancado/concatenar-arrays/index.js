const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//concatenando, além de juntar podemos botar mais valores no array
// ...rest -> ...spread
//2 modos de concatenar:
//const a3 =  a1.concat(a2, [7, 8, 9, 'Luiz']);
const a3 = [...a1, 'Guilherme', ...a2, ...[7, 8, 9]];
console.log(a3);