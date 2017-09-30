var words = [];
var winCount = 0;
var start = false;
var gameActive = false;
var userGuess
var guesses = [];
var n = 0;
var guess = false;
var letterCounter = 0;
var wrongLetterCounter = 0;
var correctLetters = [];
var alreadyGuessed = false;
var guessCounter = 9;


words[0] = {
	answer : "documentary",
	letters : ["d","o","c","u","m","e","n","t","a","r","y"],
	image : "<img src='assets/images/documentary.jpg'/>"
};

words[1] = {
	answer : "actor",
	letters : ["a","c","t","o","r"],
	image : "<img src='assets/images/actor.jpg'/>"
};

words[2] = {
	answer : "camera",
	letters : ["c","a","m","e","r","a"],
	image : "<img src='assets/images/camera.jpg'/>"
};

words[3] = {
	answer : "cinematography",
	letters : ["c","i","n","e","m","a","t","o","g","r","a","p","h","y"],
	image : "<img src='assets/images/cinematography.jpg'/>"
};

words[4] = {
	answer : "dialogue",
	letters : ["d","i","a","l","o","g","u","e"],
	image : "<img src='assets/images/dialogue.jpg'/>"
};

words[5] = {
	answer : "director",
	letters : ["d","i","r","e","c","t","o","r"],
	image : "<img src='assets/images/director.jpg'/>"
};

words[6] = {
	answer : "action",
	letters : ["a","c","t","i","o","n"],
	image : "<img src='assets/images/action.png'/>"
};

words[7] = {
	answer : "plot",
	letters : ["p","l","o","t"],
	image : "<img src='assets/images/plot.png'/>"
};

words[8] = {
	answer : "heroine",
	letters : ["h","e","r","o","i","n","e"],
	image : "<img src='assets/images/heroine.jpg'/>"
};

words[9] = {
	answer : "Hollywood",
	letters : ["h","o","l","l","y","w","o","o","d"],
	image : "<img src='assets/images/hollywood.jpg'/>"
};

words[10] = {
	answer : "prequel",
	letters : ["p","r","e","q","u","e","l"],
	image : "<img src='assets/images/prequel.jpg'/>"
};

words[11] = {
	answer : "sequel",
	letters : ["s","e","q","u","e","l"],
	image : "<img src='assets/images/sequel.jpg'/>"
};

words[12] = {
	answer : "drama",
	letters : ["d","r","a","m","a"],
	image : "<img src='assets/images/drama.jpg'/>"
};

words[13] = {
	answer : "romance",
	letters : ["r","o","m","a","n","c","e"],
	image : "<img src='assets/images/romance.jpg'/>"
};

words[14] = {
	answer : "western",
	letters : ["w","e","s","t","e","r","n"],
	image : "<img src='assets/images/western.jpg'/>"
};

words[15] = {
	answer : "horror",
	letters : ["h","o","r","r","o","r"],
	image : "<img src='assets/images/horror.jpg'/>"
};

words[16] = {
	answer : "thriller",
	letters : ["t","h","i","l","l","e","r"],
	image : "<img src='assets/images/thriller.jpg'/>"
};

words[17] = {
	answer : "comedy",
	letters : ["c","o","m","e","d","y"],
	image : "<img src='assets/images/comedy.jpg'/>"
};

words[18] = {
	answer : "cartoon",
	letters : ["c","a","r","t","o","o","n"],
	image : "<img src='assets/images/cartoon.jpg'/>"
};

words[19] = {
	answer : "script",
	letters : ["s","c","r","i","p","t"],
	image : "<img src='assets/images/script.jpg'/>"
};

words[20] = {
	answer : "cast",
	letters : ["c","a","s","t"],
	image : "<img src='assets/images/cast.jpg'/>"
};

words[21] = {
	answer : "lighting",
	letters : ["l","i","g","h","t","i","n","g"],
	image : "<img src='assets/images/lighting.jpg'/>"
};

words[22] = {
	answer : "screenwriter",
	letters : ["s","c","e","e","n","w","r","i","t","e","r"],
	image : "<img src='assets/images/screenwriter.jpg'/>"
};

words[23] = {
	answer : "reviews",
	letters : ["r","e","v","i","e","w","s"],
	image : "<img src='assets/images/reviews.jpg'/>"
};

words[24] = {
	answer : "rating",
	letters : ["r","a","t","i","n","g"],
	image : "<img src='assets/images/ratings.jpg'/>"
};

words[25] = {
	answer : "flashback",
	letters : ["f","l","a","s","h","b","a","c","k"],
	image : "<img src='assets/images/flashback.jpg'/>"
};

words[26] = {
	answer : "biography",
	letters : ["b","i","o","g","r","a","p","h","y"],
	image : "<img src='assets/images/biography.jpg'/>"
};

words[27] = {
	answer : "oscar",
	letters : ["o","s","c","a","r"],
	image : "<img src='assets/images/oscar.jpg'/>"
};

words[28] = {
	answer : "score",
	letters : ["s","c","o","r","e"],
	image : "<img src='assets/images/score.jpg'/>"
};

words[29] = {
	answer : "trilogy",
	letters : ["t","r","i","l","o","g","y"],
	image : "<img src='assets/images/trilogy.jpg'/>"
};

document.getElementById("answer").innerHTML = "Press any key to get started!";
document.getElementById("wins").innerHTML = winCount;
document.getElementById("chances").innerHTML = guessCounter;

document.onkeyup = function(event) {
	if(start === false){
		start = true;
		document.getElementById("answer").innerHTML = "";

		gameActive = true;

		n = Math.floor((Math.random() * 30));
		var newElement

		for(var i = 0; i < words[n].letters.length; i++){

			newElement = document.getElementById("letters").appendChild(document.createElement("div"));
			newElement.setAttribute("id", i);

			document.getElementById(i).innerHTML = "&nbsp_&nbsp";

		}
	}
	
	else if(gameActive === true){

		userGuess = event.key;

		for(i = 0; i < correctLetters.length; i++){
			if(userGuess === correctLetters[i]){
				alreadyGuessed = true;
				break;
			}
			else{
				alreadyGuessed = false;
			}
		}


		for(i = 0; i < words[n].letters.length; i++){
			if(words[n].letters[i] === userGuess && alreadyGuessed === false){
				document.getElementById(i).innerHTML = userGuess;
				guess = true;
				correctLetters.push(userGuess);
				letterCounter = letterCounter + 1;
				console.log(correctLetters);
			}
			else{
			}

		}
		if(guess === false){
			guesses.push(userGuess);
			document.getElementById("selection").innerHTML = guesses;
			wrongLetterCounter = wrongLetterCounter + 1;
			guessCounter = guessCounter - 1;
			document.getElementById("chances").innerHTML = guessCounter;
		}

		guess = false;

		if(letterCounter === words[n].letters.length){
			document.getElementById("answer").innerHTML = "You Win!<br><br>" + words[n].answer;
			winCount = winCount + 1;
			document.getElementById("picture").innerHTML = words[n].image;
			document.getElementById("wins").innerHTML = winCount;
			gameActive = false;
		}
		else if(wrongLetterCounter > 8){
			document.getElementById("answer").innerHTML = "You Lose!<br><br>" + words[n].answer;
			document.getElementById("picture").innerHTML = words[n].image;
			gameActive = false;
		}

	}

	else{

		gameActive = true;

		document.getElementById("answer").innerHTML = "";
		document.getElementById("letters").innerHTML = "";
		document.getElementById("selection").innerHTML = "";
		document.getElementById("picture").innerHTML = "";

		guesses = [];
		wrongLetterCounter = 0;
		letterCounter = 0;
		guessCounter = 9;

		document.getElementById("chances").innerHTML = guessCounter;

		n = Math.floor((Math.random() * 30));
		var newElement


		for(var i = 0; i < words[n].letters.length; i++){

			newElement = document.getElementById("letters").appendChild(document.createElement("div"));
			newElement.setAttribute("id", i);

			document.getElementById(i).innerHTML = "&nbsp_&nbsp";

		}	

	}

}


	


	

