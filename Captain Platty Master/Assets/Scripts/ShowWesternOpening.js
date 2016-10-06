var thirdPersonCamera : Camera;
var oldMask : int;

function OnTriggerEnter () {


	print("entered portal");
	oldMask = thirdPersonCamera.cullingMask;
	thirdPersonCamera.cullingMask = (1 << LayerMask.NameToLayer("Default"));

}

function OnTriggerExit () {

	print("exited portal");
	thirdPersonCamera.cullingMask = -257;

}