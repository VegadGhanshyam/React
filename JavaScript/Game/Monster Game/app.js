const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE=20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bonusLife=true;

adjustHealthBars(chosenMaxLife);

function reset(){
  currentPlayerHealth=chosenMaxLife;
  currentMonsterHealth=chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound(){
  const initialPlayerHealth=currentPlayerHealth;
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if(currentPlayerHealth<=0 && bonusLife){
    bonusLife=false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("bonus life save you")
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
  if(currentPlayerHealth<=0 || currentMonsterHealth<=0){
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
 
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayer(){
  let healvalue
  if(currentPlayerHealth>=chosenMaxLife-healvalue){
    alert("You can't heal more")
    healvalue=chosenMaxLife-currentPlayerHealth;
  }else{
    healvalue=HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE)
  currentPlayerHealth +=healvalue;
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayer)