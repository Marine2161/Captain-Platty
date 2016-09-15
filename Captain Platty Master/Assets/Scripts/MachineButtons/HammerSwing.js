var Hammer : Rigidbody;
var splatSound : AudioClip;
//var startCube2 : Renderer;

function OnMouseUp() {

	//if(Input.GetMouseButtonUp(0)){
	
		print ("Mouse Clicked");
		GetComponent.<AudioSource>().PlayOneShot(splatSound);
		Hammer.isKinematic = false;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	//}

}