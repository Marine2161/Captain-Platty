var level : int;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Player"){
		Application.LoadLevel("Level"+level);
		//Respawn.dead = true;
		print("Hit");
	}
}