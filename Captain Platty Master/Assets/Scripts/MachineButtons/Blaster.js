var BlastBall : Rigidbody;
var BlastRend: Renderer;
var splatSound : AudioClip;

function OnMouseUp () {

	//if(Input.GetMouseButtonUp(0)){
		GetComponent.<AudioSource>().PlayOneShot(splatSound);
		print ("Mouse Clicked");
		BlastRend.enabled = true;
		BlastBall.isKinematic = false;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	//}

}