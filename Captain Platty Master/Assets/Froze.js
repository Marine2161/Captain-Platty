var self : Rigidbody;

function Update () {
	
	if (Freeze.Frozen == true){
		self = GetComponent.<Rigidbody>();
		self.isKinematic = true;
	}
	
	else{
		self.isKinematic = false;
	}
}