var startCube1 : Collider;
var splatSound : AudioClip;
//var startCube2 : Renderer;

function OnMouseUp () {

	//if(Input.GetMouseButtonUp(0)){
	
		print ("Mouse Clicked");
		GetComponent.<AudioSource>().PlayOneShot(splatSound);
		startCube1.enabled = false;
	
		//GetComponent.<Renderer>();
		//startCube2.enabled = false;
	//}

}