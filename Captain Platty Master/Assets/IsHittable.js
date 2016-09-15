static var IsHittable : boolean = false;
var PlattyGotHit = 0;
static var PlattyGotHit3 : boolean = false;
function Start () {
PlattyGotHit3 = false;
}

function OnTriggerStay ( PlattyCollision : Collider) {
if (PlattyCollision.gameObject.tag == "Platty")
{
	IsHittable = true;
	print ("IsHittable");
	PlattyHitFunc ();
}
}
function OnTriggerExit ( PlattyCollision : Collider) {
	IsHittable = false;
	print ("IsHittable");
}
function Update () {
	if (CanHit.PlattyHit == true){
		Destroy (gameObject);
	}
	if (PlattyGotHit == 3) {
		PlattyGotHit3 = true;
	}
}
function PlattyHitFunc (){
	yield WaitForSeconds (2);
	print ("PlattyGotHit");
	PlattyGotHit ++;
}