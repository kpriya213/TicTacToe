var player1 = prompt("Enter the name of first player (X)","Player 1");
var player2 = prompt("Enter the name of second player (O)","Player 2");
var turn = prompt("Choose who plays first (X or O)","X");

if (turn == 'X' || turn == 'x') {
	flag = 1;
}
else if (turn == 'O' || turn == 'o'){
	flag = 0;
}
else {
	alert("Please enter either X or O. Click restart.");
}

function setb1() {
	if (flag == 1) {
		document.getElementById("b1").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "o";
		flag = 1;
	}	
	document.getElementById("b1").disabled = true;
}

function setb2() {
	if (flag == 1) {
		document.getElementById("b2").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "o";
		flag = 1;
	}
	document.getElementById("b2").disabled = true;
}

function setb3() {
	if (flag == 1) {
		document.getElementById("b3").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "o";
		flag = 1;
	}
	document.getElementById("b3").disabled = true;
}

function setb4() {
	if (flag == 1) {
		document.getElementById("b4").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "o";
		flag = 1;
	}
	document.getElementById("b4").disabled = true;
}

function setb5() {
	if (flag == 1) {
		document.getElementById("b5").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "o";
		flag = 1;
	}
	document.getElementById("b5").disabled = true;
}

function setb6() {
	if (flag == 1) {
		document.getElementById("b6").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "o";
		flag = 1;
	}
	document.getElementById("b6").disabled = true;
}

function setb7() {
	if (flag == 1) {
		document.getElementById("b7").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "o";
		flag = 1;
	}
	document.getElementById("b7").disabled = true;
}

function setb8() {
	if (flag == 1) {
		document.getElementById("b8").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "o";
		flag = 1;
	}
	document.getElementById("b8").disabled = true;
}

function setb9() {
	if (flag == 1) {
		document.getElementById("b9").value = "x";
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "o";
		flag = 1;
	}
	document.getElementById("b9").disabled = true;
}

function check() {
	var b1, b1, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	if (b1 == 'x' && b2 == 'x' && b3 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;	
	}

	else if (b4 == 'x' && b5 == 'x' && b6 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b7 == 'x' && b8 == 'x' && b9 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}

	else if (b1 == 'x' && b4 == 'x' && b7 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b2 == 'x' && b5 == 'x' && b8 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;	
	}

	else if (b3 == 'x' && b6 == 'x' && b9 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}

	else if (b1 == 'x' && b5 == 'x' && b9 == 'x') {
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;	
	}

	else if (b3 == 'x' && b5 == 'x' && b7 == 'x'){
		document.getElementById('result').innerHTML = player1 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b1 == 'o' && b2 == 'o' && b3 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b4 == 'o' && b5 == 'o' && b6 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b7 == 'o' && b8 == 'o' && b9 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}

	else if (b1 == 'o' && b4 == 'o' && b7 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b2 == 'o' && b5 == 'o' && b8 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if (b3 == 'o' && b6 == 'o' && b9 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}

	else if (b1 == 'o' && b5 == 'o' && b9 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;	
	}

	else if (b3 == 'o' && b5 == 'o' && b7 == 'o') {
		document.getElementById('result').innerHTML = player2 + " wins the game!";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	else if ((b1 == 'x' || b1 == 'o') && (b2 == 'x' || b2 == 'o')
		  && (b3 == 'x' || b3 == 'o') && (b4 == 'x' || b4 == 'o')
		  && (b5 == 'x' || b5 == 'o') && (b6 == 'x' || b6 == 'o')
		  && (b7 == 'x' || b7 == 'o') && (b8 == 'x' || b8 == 'o')
		  && (b9 == 'x' || b9 == 'o')) {
			document.getElementById('result').innerHTML = "The game is a tie!";
	}
}

function restart() {
	location.reload();
}
