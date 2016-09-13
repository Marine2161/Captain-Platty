var Ball4 : Rigidbody;
//var startCube2 : Renderer;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Ball"){


		Ball4.GetComponent.<ConstantForce>().relativeForce = Vector3(100, 0, 0);
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	}

}