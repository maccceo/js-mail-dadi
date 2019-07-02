// Gioco dei dadi, chi fa di più vince;
// quindi ci saranno 2 lanci di dadi e poi dovremmo stampare a schermo chi ha vinto, se ha vinto qualcuno.

var numPlayers, a = 1, previousWinnersTotal = 0, previousWinnersIndex = [0], printWinners = "";
var playerName = [], playerScore1 = [], playerScore2 = [], playerScoreTotal = [];

//chiedi quanti vogliono giocare
numPlayers = parseInt(prompt("Quanti giocatori vogliono partecipare? (2-9)"));
if (!numPlayers || numPlayers>9) {
	numPlayers = parseInt(prompt("Perfavore inserisci un numero da 2 a 9"));
}

for (var i = 0; i < numPlayers; i++) {
	//inserisci nomi giocatori
	playerName[i] = prompt("Inserisci il nome del giocatore", "player " + a);
	a++;

	//lancia i dadi di ogni giocatore
	playerScore1[i] = Math.floor(Math.random() * 6) + 1;
	playerScore2[i] = Math.floor(Math.random() * 6) + 1;
	playerScoreTotal[i] = playerScore1[i] + playerScore2[i];
	console.log(playerName[i] + " ha fatto " + playerScoreTotal[i]);

	//stampa riassunto lanci dei dadi
	document.getElementById("p"+i).innerHTML = playerName[i] + ' ha lanciato ' + playerScore1[i] + ' e ' + playerScore2[i] + ', totale ' + playerScoreTotal[i];

	//verifico chi c'è in testa
	//confronto il risultato attuale col migliore registrato precedentemente
	if (playerScoreTotal[i] > previousWinnersTotal) {
		//questo diventa il nuovo punteggio da battere
		previousWinnersTotal = playerScoreTotal[i];
		//svuoto tutti i vincitori provvisori precedenti
		previousWinnersIndex = [];	
		//inserisco l'indice del nuovo vincitore provvisorio
		previousWinnersIndex.push(i);	
		console.log('NUOVO MIGLIOR RISULTATO: ' + playerName[i] + ' con ' + playerScoreTotal[i]);

	}
	else if (playerScoreTotal[i] == previousWinnersTotal) {
		//anche questo giocatore condivide il primo posto
		previousWinnersIndex.push(i);
		console.log('ALTRO GIOCATORE ARRIVATO A ' + playerScoreTotal[i] + ": " + playerName[i]);
	}

	console.log("Best score: " + previousWinnersTotal);
	console.log("Registrato dal/dai giocatori con index: " + previousWinnersIndex);
	console.log("-----------");
}

//stampa del vincitore
if (previousWinnersIndex.length == 1) {
	//un vincitore da festeggiare
	document.getElementById("result").innerHTML = 'Ha vinto ' + playerName[previousWinnersIndex];
}
else if (previousWinnersIndex.length == 2) {
	//utilizzata soltanto per inserire la "e" tra un vincitore e l'altro invece che la virgola come per i +3 vincitori
	document.getElementById("result").innerHTML = 'Pareggio! ' + playerName[previousWinnersIndex[0]] + " e " + playerName[previousWinnersIndex[1]] + " sono arrivati a pari punti";
}

else if (previousWinnersIndex.length > 2) {
	//creo stringa con tutti nomi vincitori
	for (var i = 0; i < previousWinnersIndex.length; i++) {
		printWinners+=playerName[previousWinnersIndex[i]] + ", ";
	}
	//tolgo la virgola inutile dopo l'ultimo vincitore
	printWinners = printWinners.substring(0, printWinners.length - 2);
	document.getElementById("result").innerHTML = 'Pareggio! ' + printWinners + " sono arrivati a pari punti";
}