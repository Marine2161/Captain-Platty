var stick : Collider;
var force : Renderer;
function Update() {
	if(Input.GetMouseButtonDown(0)){
		print ("Mouse Clicked");
		stick.enabled = true;
		GetComponent.<Renderer>();
		force.enabled = true;
	}
if(Input.GetMouseButtonUp(0)){
		print ("Mouse Clicked");
		stick.enabled = false;
		GetComponent.<Renderer>();
		force.enabled = false;
	}
}