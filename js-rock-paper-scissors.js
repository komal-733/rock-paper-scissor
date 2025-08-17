function display(){ 
  document.querySelector('.js-score-display').innerHTML=`Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

const score=JSON.parse(localStorage.getItem('score'))||{lose : 0,
 win : 0,
 tie : 0};
 
display();

function playgame(playermove){
  const comp = compmove();
  let res='';

  if(playermove==='scissors'){
    if(comp==='rock')
      res='You lose!';

    else if(comp==='scissors')
      res='Tie!';

    else
      res='You win!';}

  else if(playermove==='paper'){
    if(comp==='rock')
      res='You win!';

    else if(comp==='scissors')
      res='You lose!';

    else
      res='Tie!';}

  else if(playermove==='rock'){
    if(comp==='rock')
      res='Tie!';

    else if(comp==='scissors')
      res='You win!';

    else
      res='You lose!';}

  if(res==='You win!')
    score.win+=1;

  else if(res==='You lose!')
    score.lose+=1;

  else if(res==='Tie!')
    score.tie+=1;
  
  localStorage.setItem('score',JSON.stringify(score));
  
  document.querySelector('.js-result').innerHTML=res;
  
  
    document.querySelector('.js-choose').innerHTML=`You <img src="images/${playermove}-emoji.png" class="${playermove}">  <img src="images/${comp}-emoji.png" class="${comp}"> Computer`;
 
  

  display();
}

function compmove(){

  const ran=Math.random();
  let computermove;

  if(ran>=0 && ran<(1/3))
    {computermove='rock';}

  else if(ran>=(1/3) && ran<(2/3))
    {computermove='paper';}

  else 
    {computermove='scissors';}

  return computermove;
}
