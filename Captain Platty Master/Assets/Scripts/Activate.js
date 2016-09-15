static var Enter : boolean = false;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Player"){
		Enter = true;
		print("Entered");
	}

}