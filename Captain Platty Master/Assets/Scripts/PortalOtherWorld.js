import UnityEngine.SceneManagement;
function Start () {

}

function OnTriggerEnter () {
	SceneManager.LoadScene("TheOtherWorld", LoadSceneMode.Single);
}