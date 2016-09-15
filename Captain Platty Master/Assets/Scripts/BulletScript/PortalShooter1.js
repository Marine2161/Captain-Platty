static var CurrentBlue : GameObject;
static var CurrentOrange : GameObject;
var shotSound : AudioClip;
var bullet : Rigidbody;
//var Ball2 : Rigidbody;
var shot : int = 600;

function Update () {
	

	if(Input.GetMouseButtonUp(1)){
		var Attack;

		print ("Mouse Clicked");
		GetComponent.<AudioSource>().PlayOneShot(shotSound);
		Attack = Instantiate (bullet, transform.position + transform.forward *1, transform.rotation);
		Attack.AddForce(transform.forward * shot);


	}
}
