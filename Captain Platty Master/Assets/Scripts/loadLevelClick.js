import UnityEngine.SceneManagement;
var level : int;

function OnMouseDown(){
	SceneManager.LoadScene("level" + level, LoadSceneMode.Single);
}