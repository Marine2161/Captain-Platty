//var Glow : Light;
//var stick: Rigidbody;
//var splatSound: AudioClip;
var Orange : GameObject;


function OnCollisionEnter (col : Collision) {
	
	Destroy (PortalShooter.CurrentOrange);

	PortalShooter.CurrentOrange = Instantiate (Orange, col.contacts[0].point + Vector3.Scale(col.contacts[0].normal,
	 Vector3(.01, .01, .01)), Quaternion.FromToRotation(Vector3.up, col.contacts[0].normal));
	
	Destroy (gameObject);
}


