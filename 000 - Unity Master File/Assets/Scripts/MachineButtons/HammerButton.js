var HammerButton : Renderer;
//var startCube2 : Renderer;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Ball"){


		HammerButton.enabled = true;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	}

}