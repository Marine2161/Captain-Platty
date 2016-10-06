function OnTriggerEnter (col : Collider){
	if( col.gameObject.tag == "Platty"){

		TeleportTo.Portal = true;
		print("Portal in use");
	}
}