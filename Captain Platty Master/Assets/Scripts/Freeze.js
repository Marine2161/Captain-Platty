static var Frozen : boolean = false;

function Freeze (col : Collider){


	if (col.gameObject.tag == "Enemy"){
		Frozen = true;
		print("Entered");
	}

}