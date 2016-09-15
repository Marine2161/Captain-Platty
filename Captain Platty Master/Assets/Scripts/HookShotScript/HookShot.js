static var CurrentBlue : GameObject;
static var CurrentOrange : GameObject;

var Ball : Rigidbody;
var Ball2 : Rigidbody;
var shot : int = 600;

function Update () {
	

	if(Input.GetKeyDown (KeyCode.F)){
		var BluePortal;

		print ("Mouse Clicked");
		BluePortal = Instantiate (Ball, transform.position + transform.forward, transform.rotation);
		BluePortal.AddForce(transform.forward * shot);

	}

	/*if(Input.GetKeyUp (KeyCode.Mouse1)){
		var OrangePortal;

		print ("Mouse Clicked");
		OrangePortal = Instantiate (Ball2, transform.position + transform.forward, transform.rotation);
		OrangePortal.AddForce(transform.forward * shot);

	}*/
}