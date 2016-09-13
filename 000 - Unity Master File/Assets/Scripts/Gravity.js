var playedSound : boolean = false;
var startTime : float = 0.0;
var item : Rigidbody;
var splatSound : AudioClip;


function Start () {

}

function Update () {
if (Activate.Enter == true){
	if(Time.time > startTime){
		item = GetComponent.<Rigidbody>();
		item.isKinematic = false;

		if (!playedSound){
			GetComponent.<AudioSource>().PlayOneShot(splatSound);
			playedSound = true;
			}
		}
	}
}
