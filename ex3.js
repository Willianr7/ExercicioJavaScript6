let maior = 0
let menor = 0
let idade

while(idade != 99){
    idade = Number(prompt("Digite sua idade: \nOu digite 99 para finalizar"))
    if(idade < 22){
        menor++
    }
     else if(idade > 49 && idade < 100){
        maior++
    }
}
alert(`O total de menores é ${menor} e maiores${maior}`)



