//variaveis
let nomeHeroi = "Desafiante Oculto"
let xp = 5050
let nivel

//condições
if(xp <= 1000) {
    nivel = "Ferro"
    
}else if(xp >= 1001 && xp <= 2000) {
	nivel = "Bronze"

}else if(xp >= 2001 && xp <= 5000) {
	nivel = "Prata"

//coloquei 5001 pois quando estava 6001 e a XP fosse entre 5001 e 6000, o nivel constava indefinido
}else if(xp >= 5001 && xp <= 7000) {
	nivel = "Ouro"

}else if(xp >= 7001 && xp <= 8000) {Q
}else if(xp >= 8001 && xp <= 9000) {
	nivel = "Ascendente"

}else if(xp >= 9001 && xp <= 10000) {
	nivel = "Imortal"

}else if(xp >= 10001){
	nivel = "Radiante"

}

//mensagem na tela
console.log("O Herói de nome " + nomeHeroi + "está no nível de " + nivel + "!")
