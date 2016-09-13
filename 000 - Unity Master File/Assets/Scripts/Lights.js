var Glow : Light;
var Speed : float;

function Start (){


}

function Update () {
	
	Glow.intensity -= Speed;
	if(Glow.intensity == 0.5){
		GetComponent(Lights).enabled = false;

	}

}