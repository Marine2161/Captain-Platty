﻿static var PlattyHit : boolean = false;

function Start () {

}

function Update () {
if (IsHittable.IsHittable == true && Input.GetKeyDown (KeyCode.V)) 
{
print ("HitEmBoy");
PlattyHit = true;
}
else {
	PlattyHit = false;
}
if (IsHittable.PlattyGotHit3 == true) {
	Application.LoadLevel ("Level4");
}
}