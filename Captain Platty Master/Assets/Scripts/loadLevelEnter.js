import UnityEngine.SceneManagement;
var level : int;

function OnTriggerEnter(){
	SceneManager.LoadScene("Scene 1", LoadSceneMode.Single);
}