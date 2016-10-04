import UnityEngine.SceneManagement;
var level : int;
var scoreValue : int = 1;

function OnTriggerEnter(){

	Ball.score1 += scoreValue;

	SceneManager.LoadScene("Level" + level, LoadSceneMode.Single);

}