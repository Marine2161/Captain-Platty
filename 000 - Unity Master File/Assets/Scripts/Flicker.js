var myLight : Light;
var flickerState : float = 0.0;

function Update () {
	flickerState = Random.value;
	myLight.intensity = 8.0 * flickerState;
	GetComponent.<Renderer>().material.color = new Color (flickerState,flickerState,flickerState);

}