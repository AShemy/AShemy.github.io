let cubeGG = [];
let cubeEnemy = [];
	
let player = 1;
			
scoreGG = 0;
scoreEnemy = 0;
	
let images = ["1.png", "2.png","3.png","4.png","5.png","6.png"]

function restart(){
	let cubeGG = [];
	let cubeEnemy = [];
	
	let player = 1;
			
	scoreGG = 0;
	scoreEnemy = 0;
	document.getElementById("winPlayer1").style.display = "none"
	document.getElementById("winPlayer2").style.display = "none"
	document.getElementById("game").style.display = "inline-block"
	document.getElementById("score1").innerText = "Счет Игрока1: "+scoreGG;
	document.getElementById("score2").innerText = "Счет Игрока2: "+scoreEnemy;
	document.getElementById("scoreRound").innerText = "Очки за раунд: 0";
	document.getElementById("player1").innerText = "Игрок ";
}
	
//Создает 6 случайных чисел
function cubeGenerator6(cube){
	for (let i = 0; i<6; i++){
		cube.push(Math.floor(Math.random()*6+1))
	}
}

//функция паузы
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//анимация кубов с вызовом функции tD()
async function delayedDice() {
	let animCube = []
	let time = 10
	
	let btn = document.getElementById("mainBtn");
	
	let dice1 = document.getElementById("dice1");
	let dice2 = document.getElementById("dice2");
	let dice3 = document.getElementById("dice3");
	let dice4 = document.getElementById("dice4");
	let dice5 = document.getElementById("dice5");
	let dice6 = document.getElementById("dice6");
	
	let dices = [dice1, dice2, dice3, dice4, dice5, dice6];
	
	btn.disabled = true;
	btn.style.backgroundColor = '#808080';
	btn.innerText = "Подождите...";
	
	if (player==1){
		document.getElementById("player1").innerText = "Игрок 1"
	}else if (player==2){
		document.getElementById("player1").innerText = "Игрок 2"
	}
	
	for (let o = 0; o<10; o++){
		cubeGenerator6(animCube)
		console.log(animCube)
		await sleep(time);
		time += 40
		for (let i = 0; i<animCube.length; i++){
			if (animCube[i]==1){
				dices[i].src = images[0];
			}else if (animCube[i]==2){
				dices[i].src = images[1];
			}else if (animCube[i]==3){
				dices[i].src = images[2];
			}else if (animCube[i]==4){
				dices[i].src = images[3];
			}else if (animCube[i]==5){
				dices[i].src = images[4];
			}else if (animCube[i]==6){
				dices[i].src = images[5];
			}
		}
		animCube = [];
	}
	
	if (player==1){
		throwDice(cubeGG, scoreGG);
		player++;
	}else if (player==2){
		throwDice(cubeEnemy, scoreEnemy);
		player--;
	}
	btn.disabled = false;
	btn.innerText = "Кинуть кости";
	btn.style.backgroundColor = '#f1d298';
}
	
//Ищет количество одинаковых элементов по значениям. Принимает массив случайных чисел
function countingIdentical(spisok){
	let x1=0;
	let x2=0;
	let x3=0;
	let x4=0;
	let x5=0;
	let x6=0;
	howMany = [0]
	for (let i = 0; i < spisok.length; i++) {
		if (spisok[i] == 1) {
				x1 += 1;
		}else if  (spisok[i] == 2){
			x2 += 1;
		}else if  (spisok[i] == 3){
			x3 += 1;
		}else if  (spisok[i] == 4){
			x4 += 1;
		}else if  (spisok[i] == 5){
			x5 += 1;
		}else if  (spisok[i] == 6){
			x6 += 1;
		}
	}
	howMany.push(x1);
	howMany.push(x2);
	howMany.push(x3);
	howMany.push(x4);
	howMany.push(x5);
	howMany.push(x6);
	return(howMany)
}
		
// Подсчет очков. Принимает результат функции countingIdentical и предыдущие очки за бросок
function countingScore(howMany, score){
		if (howMany[1]==6){
			score = 8000
		}else if (howMany[6]==6){
			score = 4800
		}else if (howMany[1]==5 && howMany[5]==1){
			score = 4050
		}else if ((howMany[1]==5) || (howMany[5]==6)){
			score = 4000
		}else if (howMany[4]==6){
			score = 3200
		}else if (howMany[6]==5 && howMany[1]==1){
			score = 2500
		}else if (howMany[6]==5 && howMany[5]==1){
			score = 2450
		}else if ((howMany[3]==6) || (howMany[6]==5)){
			score = 2400
		}else if ((howMany[1]==4 && howMany[5]==2) || (howMany[5]==5 && howMany[1]==1)){
			score = 2100
		}else if (howMany[1]==4 && howMany[5]==1){
			score = 2050
		}else if ((howMany[1]==4) || (howMany[5]==5)){
			score = 2000
		}else if (howMany[1]==1 && howMany[4]==5){
			score = 1700
		}else if (howMany[4]==5 && howMany[5]==1){
			score = 1650
		}else if (howMany[2]==6 || (howMany[6]==3 && howMany[1]==3) || howMany[4]==5){
			score = 1600
		}else if ((howMany[1]==3 && howMany[5]==3) || (howMany[1]==1 && howMany[2]==1 && howMany[3]==1 && howMany[4]==1 && howMany[5]==1 && howMany[6]==1)){
			score = 1500
		}else if ((howMany[4]==3 && howMany[1]==3) || (howMany[6]==4 && howMany[1]==2)){
			score = 1400
		}else if (howMany[6]==4 && howMany[5]==1 && howMany[1]==1){
			score = 1350
		}else if ((howMany[3]==5 && howMany[1]==1) || (howMany[3]==3 && howMany[1]==3) || (howMany[6]==4 && howMany[5]==2) || (howMany[6]==4 && howMany[1]==1)){
			score = 1300
		}else if ((howMany[3]==5 && howMany[5]==1) || (howMany[6]==4 && howMany[5]==1)){
			score = 1250
		}else if ((howMany[2]==3 && howMany[1]==3) || howMany[3]==5 || howMany[6]==4 || (howMany[5]==4 && howMany[1]==2)){
			score = 1200
		}else if ((howMany[1]==3 && howMany[5]==2) || (howMany[5]==4 && howMany[1]==1) || (howMany[6]==3 && howMany[5]==3)){
			score = 1100
		}else if (howMany[1]==3 && howMany[5]==1){
			score = 1050
		}else if (howMany[1]==3 || howMany[5]==4 || (howMany[4]==4 && howMany[1]==2)){
			score = 1000
		}else if (howMany[1]==3 && howMany[5]==1 && howMany[5]==1){
			score = 1050
		}else if (howMany[4]==4 && howMany[5]==1 && howMany[1]==1){
			score = 950
		}else if ((howMany[2]==5 && howMany[1]==1) || (howMany[4]==4 && howMany[1]==1) || (howMany[4]==4 && howMany[5]==2) || (howMany[4]==3 && howMany[5]==3)){
			score = 900
		}else if ((howMany[2]==5 && howMany[5]==1) || (howMany[4]==4 && howMany[5]==1) || (howMany[6]==3 && howMany[1]==2 && howMany[5]==1)){
			score = 850
		}else if (howMany[2]==5 || (howMany[3]==4 && howMany[1]==2) || (howMany[3]==3 && howMany[5]==3) || howMany[4]==4 || (howMany[6]==3 && howMany[1]==2) || (howMany[6]==3 && howMany[1]==1 && howMany[5]==2)){
			score = 800
		}else if ((howMany[3]==4 && howMany[1]==1 && howMany[5]==1) || (howMany[6]==3 && howMany[1]==1 && howMany[5]==1) || (howMany[2]==1 && howMany[3]==1 && howMany[4]==1 && howMany[5]==1 && howMany[6]==1)){
			score = 750
		}else if ((howMany[5]==3 && howMany[1]==2) || (howMany[2]==3 && howMany[5]==3) || (howMany[3]==4 && howMany[1]==1) || (howMany[3]==4 && howMany[5]==2) || (howMany[6]==3 && howMany[1]==1) || (howMany[6]==3 && howMany[5]==2)){
			score = 700
		}else if ((howMany[3]==4 && howMany[5]==1) || (howMany[4]==3 && howMany[1]==2 && howMany[5]==1) || (howMany[6]==3 && howMany[5]==1)){
			score = 650
		}else if ((howMany[5]==3 && howMany[1]==1) || (howMany[2]==4 && howMany[1]==2) || howMany[3]==4 || (howMany[4]==3 && howMany[1]==2) || (howMany[4]==3 && howMany[5]==2 && howMany[1]==1) || howMany[6]==3){
			score = 600
		}else if ((howMany[2]==4 && howMany[5]==1 && howMany[1]==1) || (howMany[3]==3 && howMany[1]==2 && howMany[5]==1) || (howMany[4]==3 && howMany[5]==1 && howMany[1]==1)){
			score = 550
		}else if ((howMany[3]==3 && howMany[5]==2 && howMany[1]==1) || (howMany[2]==4 && howMany[1]==1) || (howMany[2]==4 && howMany[5]==2) || (howMany[3]==3 && howMany[1]==2) || (howMany[4]==3 && howMany[1]==1) || (howMany[4]==3 && howMany[5]==2) || howMany[5]==3 || (howMany[1]==1 && howMany[2]==1 && howMany[3]==1 && howMany[4]==1 && howMany[5]==1)){
			score = 500
		}else if ((howMany[2]==4 && howMany[5]==1) || (howMany[2]==3 && howMany[1]==2 && howMany[5]==1) || (howMany[3]==3 && howMany[1]==1 && howMany[5]==1) || (howMany[4]==3 && howMany[5]==1)){
			score = 450
		}else if (howMany[2]==4 || (howMany[2]==3 && howMany[1]==2) || (howMany[2]==3 && howMany[1]==1 && howMany[5]==2) || (howMany[3]==3 && howMany[1]==1) || (howMany[3]==3 && howMany[5]==2) || howMany[4]==3){
			score = 400
		}else if ((howMany[2]==3 && howMany[5]==1 && howMany[1]==1) || (howMany[3]==3 && howMany[5]==1)){
			score = 350
		}else if ((howMany[1]==2 && howMany[5]==2) || (howMany[2]==3 && howMany[1]==1) || (howMany[2]==3 && howMany[5]==2) || howMany[3]==3){
			score = 300
		}else if ((howMany[1]==2 && howMany[5]==1) || (howMany[2]==3 && howMany[5]==1)){
			score = 250
		}else if ((howMany[1]==2) || (howMany[1]==1 && howMany[5]==2) || howMany[2]==3){
			score = 200
		}else if (howMany[1]==1 && howMany[5]==1){
			score = 150
		}else if (howMany[1]==1 || howMany[5]==2){
			score = 100
		}else if (howMany[5]==1){
			score = 50
		}
		return(score)
	}
	
//function tD(){
//	if (player==1){
//		document.getElementById("player1").innerText = "Игрок 1"
//		throwDice(cubeGG, scoreGG);
//		player++;
//	}else if (player==2){
//		document.getElementById("player1").innerText = "Игрок 2"
//		throwDice(cubeEnemy, scoreEnemy);
//		player--;
//	}
//}
	
function throwDice(cube, score){
	cubeGenerator6(cube);
		
	console.log(cube);
	let dice1 = document.getElementById("dice1");
	let dice2 = document.getElementById("dice2");
	let dice3 = document.getElementById("dice3");
	let dice4 = document.getElementById("dice4");
	let dice5 = document.getElementById("dice5");
	let dice6 = document.getElementById("dice6");
	let textScore1 = document.getElementById("score1");
	let textScore2 = document.getElementById("score2");
	
	let dices = [dice1, dice2, dice3, dice4, dice5, dice6];
		
	for (let i = 0; i<cube.length; i++){
		if (cube[i]==1){
			dices[i].src = images[0];
		}else if (cube[i]==2){
			dices[i].src = images[1];
		}else if (cube[i]==3){
			dices[i].src = images[2];
		}else if (cube[i]==4){
			dices[i].src = images[3];
		}else if (cube[i]==5){
			dices[i].src = images[4];
		}else if (cube[i]==6){
			dices[i].src = images[5];
		}
	}
		
	howMany  = countingIdentical(cube);
	scoreNow = countingScore(howMany, score);
		
	cube.splice(0,6);
		
	console.log(howMany);
	console.log(scoreNow);
		
	if (player==1){
		scoreGG = scoreGG + scoreNow;
		textScore1.innerText= "Счет Игрока1: "+scoreGG;
		if (scoreGG>=4000){
			document.getElementById("winPlayer1").style.display = "block"
			document.getElementById("game").style.display = "none"
		}
	}else if (player==2){
		scoreEnemy = scoreEnemy + scoreNow;
		textScore2.innerText="Счет Игрока2: "+scoreEnemy;
		if (scoreEnemy>=4000){
			document.getElementById("winPlayer2").style.display = "block"
			document.getElementById("game").style.display = "none"
		}
	}
	
	document.getElementById("scoreRound").innerText = "Очков за бросок: "+scoreNow;
	scoreNow = 0;
}
	
	
	function showRules(){
		let ruleBox = document.getElementById("rules");
		let gameBox = document.getElementById("game");
		game.style.width = "65%";
		ruleBox.style.display = "inline-block";
	}
	
	function closeRules(){
		let ruleBox = document.getElementById("rules");
		let gameBox = document.getElementById("game");
		game.style.width = "100%";
		ruleBox.style.display = "none";
	}		
	
