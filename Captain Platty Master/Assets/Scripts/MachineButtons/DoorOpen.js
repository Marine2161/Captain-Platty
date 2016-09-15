var Door : Rigidbody;
//var startCube2 : Renderer;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Ball"){


		Door.isKinematic = false;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	}

}