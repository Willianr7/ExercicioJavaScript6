var pares = 0,
    impares = 0;

for(let i = 1; i <= 10; i++){

    let num = Number(prompt("Informe um número: "))

    if( num % 2 == 0){
        pares++
    }else{
        impares++
    }
}
alert(
    `Total de números pares: ${pares}\n
     Total de números ímpares: ${impares}`)
