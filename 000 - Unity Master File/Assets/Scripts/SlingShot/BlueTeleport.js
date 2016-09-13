var player : GameObject;
var power : int = 100;

function Update () {
	
	player = GameObject.FindWithTag ("Player");
	
	/*var toTeleport = col.gameObject;
	toTeleport.transform.position = PortalShooter.CurrentOrange.transform.position
	+ Vector3.Scale(PortalShooter.CurrentOrange.transform.up, Vector3(2,2,2));

	print ("Teleporting Blue");
*/
	//var contact: ContactPoint = col.contacts[0];

		//GetComponent.<Rigidbody>().AddForce((player.transform.position - transform.position) * 50000 * Time.smoothDeltaTime);

		player.GetComponent.<Rigidbody>().AddForce((transform.position - player.transform.position).normalized * power);
}

function OnCollisionEnter (col : Collision) {
	
	Destroy (PortalShooter.CurrentOrange);
	
	Destroy (gameObject);
}