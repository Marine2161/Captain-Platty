var myFPSControl : GameObject;
static var IsAiming : boolean = false;
function Start () {
}

function Update () {
if (Input.GetMouseButton (1))
{
	IsAiming = true;
	print ("IsAiming = true;");
	myFPSControl.GetComponent ("FirstPersonController").m_RunSpeed = 2;
	myFPSControl.GetComponent ("FirstPersonController").m_WalkSpeed = 2;
}
else if (Input.GetMouseButtonUp (1))
{
	IsAiming = false;
	print ("IsAiming = true;");
	myFPSControl.GetComponent ("FirstPersonController").m_RunSpeed = 10;
	myFPSControl.GetComponent ("FirstPersonController").m_WalkSpeed = 6;
}
}