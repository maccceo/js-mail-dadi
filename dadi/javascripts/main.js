// Gioco dei dadi, chi fa di più vince;
// quindi ci saranno 2 lanci di dadi e poi dovremmo stampare a schermo chi ha vinto, se ha vinto qualcuno.

var playerName = [], playerScore1 = [], playerScore2 = [], playerScoreTotal = [], a = 1;


for (var i = 0; i < 2; i++) {
	//inserisci nomi giocatori
	playerName[i] = prompt("Inserisci il nome del giocatore", "player " + a);
	a++;

	//lancia i dadi di ogni giocatore
	playerScore1[i] = Math.floor(Math.random() * 6) + 1;
	playerScore2[i] = Math.floor(Math.random() * 6) + 1;
	playerScoreTotal[i] = playerScore1[i] + playerScore2[i];

	console.log(playerName[i] + " ha lanciato " + playerScore1[i] + " e " + playerScore2[i] + ", totale " + playerScoreTotal[i]);
}

//controlla chi ha vinto

//stampa vincitore con riassunto lanci