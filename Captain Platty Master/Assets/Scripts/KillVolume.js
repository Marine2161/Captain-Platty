import UnityEngine.SceneManagement;
var level : int;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Player"){
		SceneManager.LoadScene("Level" + level, LoadSceneMode.Single);
		//Respawn.dead = true;
		print("Hit");
	}
}