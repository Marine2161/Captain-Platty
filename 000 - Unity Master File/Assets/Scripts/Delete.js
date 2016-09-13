function OnCollisionEnter (col : Collision){

	if (col.gameObject.tag == "Tile"){
		Destroy (col.gameObject);
	}

}