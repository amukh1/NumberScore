let game = {
    Score: 0,
    Update: function() {
        document.getElementById('score').innerHTML = `Score: ${game.Score}`
        document.getElementById('highScore').innerHTML = `Highscore: `+ window.localStorage.getItem('highScore')
        if(game.highScore > window.localStorage.getItem('highScore')){
        window.localStorage.setItem('highScore', game.highScore)
        }
    },
    highScore: 0
}

function randomINT(x) {
    x = x+1
    return Math.floor(Math.random() * x);
}
let arr = [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0]
document.getElementById('add').addEventListener('click', ()=>{
  let rnd = randomINT(arr.length - 1)
  console.log(arr[rnd])
  if(arr[rnd] == 1){
      console.log('Landmine!')
    //   alert('Landmine!')
      document.getElementById('landmine').style.opacity = 1
      document.getElementById('landmine').style.color = 'red'
      document.getElementById('landmine').innerHTML = 'Landmine!'
      let x = setTimeout(function(){
        document.getElementById('landmine').style.opacity = 0 
      }, 3000)
if(window.localStorage.getItem('highScore') < game.Score){
    game.highScore = game.Score
}
      game.Score = game.Score - 10
      game.Update()
  }else if(arr[rnd] == 0){
      console.log('Clear.')
      game.Score++
      game.Update()
      let times = game.Score / 50
    //   mm(times)
  }else if(arr[rnd] == 2){
    document.getElementById('landmine').innerHTML = 'BOOST!'
    document.getElementById('landmine').style.color = '	rgb(0,255,0)'
    document.getElementById('landmine').style.opacity = 1
    let x = setTimeout(function(){
      document.getElementById('landmine').style.opacity = 0 
    }, 3000)
    game.Score = game.Score + 10
    game.Update()
  }
})

// function mm(x) {
//     for(let i=0; i=x; i++){
//         let rnd = randomINT(arr.length)
//         arr[rnd] = 1
//     }
// }