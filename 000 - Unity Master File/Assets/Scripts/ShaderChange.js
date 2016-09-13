var power : boolean = false;
var flare : Color;
var base : Color;

function Update () {

if (Input.GetKeyDown(KeyCode.Q)){
		power = !power;
	}
	if(power){

		GetComponent.<Renderer>().material.SetColor("_EmissionColor", flare);
	}

	else {
		
		//flare -= 0.05;
		GetComponent.<Renderer>().material.SetColor("_EmissionColor", base);

	}
}