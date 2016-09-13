static var CurrentBlue : GameObject;
static var CurrentOrange : GameObject;

var Sword : Rigidbody;
//var Ball2 : Rigidbody;
var shot : int = 600;

function Update () {
	

	if(Input.GetMouseButtonUp(0)){
		var Attack;

		print ("Mouse Clicked");
		Attack = Instantiate (Sword, transform.position + transform.forward *2, transform.rotation);
		Attack.AddForce(transform.forward * shot);


	}
}
