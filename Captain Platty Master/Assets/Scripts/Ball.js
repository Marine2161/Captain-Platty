static var score1 : int = 0;  
static var score2 : int = 0;
var move : int = 0.0;

function Start () {
	// Use this for initialization
  GetComponent.<Rigidbody>().AddForce(Vector3.right * move ,ForceMode.Impulse);
  
}

function OnGUI(){
	GUI.Button(Rect(Screen.width / 2 - 200,20,100,40),"Bill: " + score1);

	GUI.Button(Rect(Screen.width / 2 + 100,20,100,40)," Ted: " + score2);
}


function Update () {

	//GetComponent.<Rigidbody>().velocity;
	//cvel.normalized * cSpeed;
    //GetComponent.<Rigidbody>().velocity = Vector3.Leerp(cvel,tvel,Time.deltaTime * sFactor);

}