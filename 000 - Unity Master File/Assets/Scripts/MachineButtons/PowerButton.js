var PowerButton : Renderer;
var BallSound : AudioClip;

function OnTriggerEnter (col : Collider){
	if (col.gameObject.tag == "Plug"){

		GetComponent.<AudioSource>().PlayOneShot(BallSound);
		print ("ON");
		PowerButton.enabled = true;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	}

}