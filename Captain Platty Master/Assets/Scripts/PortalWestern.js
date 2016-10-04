import UnityEngine.SceneManagement;

function Start () {

}

function OnTriggerEnter () {
	SceneManager.LoadScene("Western", LoadSceneMode.Single);
}