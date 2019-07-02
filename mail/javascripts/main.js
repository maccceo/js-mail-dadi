// Chiedi all’utente la sua email,  controlla che sia nella lista
// di chi può accedere e stampa un messaggio appropriato

var userMail, userFound = false;
//genero lista email accettate
var registered = [
	"maurizioaltofuoco@libero.it",
	"grazianotiralecuoia@gmail.com",
	"pietroturbolento@tim.it",
	"ninoeldorado@gmail.com",
	"denniscourmayeur@hotmail.com",
	"lorisbavaria@hotmail.com"
];

//chiedo l'email dell'utente
userMail = prompt("Inserisci la tua email");

//verifico se è presente nel db
for (var i = 0; i < registered.length; i++) {
	//verifico che il ciclo for funzioni correttamente
	console.log(registered[i]);
	if (userMail == registered[i]) {
		userFound = true;
		console.log("Trovato!");
	}
}

//stampo il risultato della ricerca
if (userFound) {
	document.getElementById("result").innerHTML = '<h2>Accesso effettuato!</h2><img src="./resources/granted.jpg">';
} else {
	document.getElementById("result").innerHTML = '<h2>Accesso negato!</h2><img src="./resources/denied.jpg">';
}