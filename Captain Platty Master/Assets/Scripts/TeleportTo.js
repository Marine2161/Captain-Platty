var transportTo : Transform;
static var Portal : boolean = false;

function Update () {
	if(Portal){
		Teleport();
		Portal = false;
	}
}

function Teleport () {
	transform.position = transportTo.position;
}