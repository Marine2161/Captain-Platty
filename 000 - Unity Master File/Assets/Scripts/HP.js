var health : int = 2;
var explode : GameObject;

function OnCollisionEnter (col : Collision){

	if (col.gameObject.tag == "Weapon"){
		
		health -= 1;
		
		if (health == 0) {
			Instantiate (explode, col.contacts[0].point + Vector3.Scale(col.contacts[0].normal,
				 Vector3(.01, .01, .01)), Quaternion.FromToRotation(Vector3.up, col.contacts[0].normal));
			Destroy(gameObject);
			print ("Dead");
		}
	}
}