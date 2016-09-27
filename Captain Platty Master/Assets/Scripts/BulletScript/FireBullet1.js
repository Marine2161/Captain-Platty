static var CurrentBlue : GameObject;
static var CurrentOrange : GameObject;
var ammo : int = 10; // integer that counts how much ammo is left for the blunderbuss
var shotSound : AudioClip;
var bullet : Rigidbody;
//var Ball2 : Rigidbody;
var shot : int = 600;

function Update () {
	
	if(ammo > 0){

		if(Input.GetMouseButtonUp(0)){
			var Attack;

			print ("Mouse Clicked");
			GetComponent.<AudioSource>().PlayOneShot(shotSound);
			Attack = Instantiate (bullet, transform.position + transform.forward *1, transform.rotation);
			Attack.AddForce(transform.forward * shot);
			ammo--;
			print("ammo =" + ammo);

		}
	} else if (ammo == 0){
		print("Reload");
	}	

	if(Input.GetKeyDown(KeyCode.G)){ //if the keyboard key G is pressed, reload
		print("G key pressed");
		ammo = 10; // reset the integer ammo to be set back to 10
		//isEmpty = false; // resets the boolean isEmpty back to false
		//Play reload animation with a counter to wait for the animation to finish
	}
}

 