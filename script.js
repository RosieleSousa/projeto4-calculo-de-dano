const player1 = prompt("Digite o nome do jogador 1")
const power1 = parseInt(prompt("Digite o poder de ataque do jogador 1"))

const player2 = prompt("Digite o nome do jogador 2")
let defense2 = parseInt(prompt("Digite o poder de defesa do jogador 2"))
let life2 = parseInt(prompt("digite a quantidade de pontos de vida:"))
const shield2 = confirm("o jogador 2 possui escudo?")
 

if (power1 > defense2 && shield2 === false ){
    let damage  = power1 - defense2
    life2 = life2 - damage
  alert(`${player1} atacou. ${player2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${life2}.`)
} else if (power1 > defense2 && shield2 === true){
    let damage2 = (power1 - defense2)/2
    life2 = life2 - damage2
    alert(`${player1} atacou. ${player2} sofreu ${damage2} de dano e possui escudo. Sua vida agora é ${life2}.`)
} else if (power1 <= defense2){
  alert(`${player1} atacou, mas não afetou ${player2}. Nenhum dano causado!`)
}
 