var PlayerFLoor : Collider;
//var startCube2 : Renderer;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Ball"){


		PlayerFLoor.enabled = false;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	}

}