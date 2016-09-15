var power : boolean = false;
var flare : Color;
var base : Color;
var invisable : Renderer;

function Update () {

if (Input.GetKeyDown(KeyCode.Q)){
		power = !power;
	}
	if(power){

		GetComponent.<Renderer>().material.SetColor("_EmissionColor", flare);
		invisable.enabled = true;
	}

	else {
		
		//flare -= 0.05;
		GetComponent.<Renderer>().material.SetColor("_EmissionColor", base);
		invisable.enabled = false;
	}
}