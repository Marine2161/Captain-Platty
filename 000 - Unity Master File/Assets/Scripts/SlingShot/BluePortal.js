//var Glow : Light;
//var stick: Rigidbody;
//var splatSound: AudioClip;
var Blue : GameObject;
var player : Rigidbody;
var stick : Rigidbody;

function OnCollisionEnter (col : Collision) {
	if (col.gameObject.tag == "Tile"){
	Destroy (PortalShooter.CurrentBlue);

	PortalShooter.CurrentBlue = Instantiate (Blue, col.contacts[0].point + Vector3.Scale(col.contacts[0].normal,
	 Vector3(.01, .01, .01)), Quaternion.FromToRotation(Vector3.up, col.contacts[0].normal));
	
	Destroy (gameObject);
  }
}


