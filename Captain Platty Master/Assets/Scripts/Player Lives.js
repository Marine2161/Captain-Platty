
var level : int;
var scoreValue : int = 1;

function OnTriggerEnter(){

	Ball.score1 += scoreValue;


	Application.LoadLevel("Level"+level);

	}
