#pragma strict
var objectPos : Vector3;
var objectRot : Quaternion;
var pickObj : GameObject;
var canPick = true;
var picking = false;
var guipick = false;
var pickRef : GameObject;

function Start () {

	pickRef = GameObject.FindWithTag ("pickupref");
	pickObj = pickRef;
}

function Update () {

	var raycheck : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hitcheck : RaycastHit;

	if (Physics.Raycast(raycheck, hitcheck) && hitcheck.collider.gameObject.tag == "pickup"){
		guipick = true;
	}

	if (Physics.Raycast(raycheck, hitcheck) && hitcheck.collider.gameObject.tag != "pickup"){
		guipick = false;
	}

	objectPos = transform.position;
	objectRot = transform.rotation;

	if (Input.GetMouseButtonDown(0) && canPick){
		picking = true;
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		print("picking up");

		if (Physics.Raycast(ray, hit, 10)){

			print("" + hit.collider.gameObject.name);

			if (hit.collider.gameObject.tag == "pickup"){
				pickObj = hit.collider.gameObject;

				hit.rigidbody.useGravity = false;
				hit.rigidbody.isKinematic = true;
				hit.collider.isTrigger = true;
				hit.transform.parent = gameObject.transform;
				hit.transform.position = objectPos;
				hit.transform.rotation = objectRot;
			}
		}
	}
	if (Input.GetMouseButtonUp(0) && picking){
		picking = false;
		canPick = false;
	}

	if (Input.GetMouseButtonDown(0) && !canPick && pickObj.GetComponent(pickedUpObj).cannotThrow != true){
		canPick = true;
		pickObj.GetComponent.<Rigidbody>().useGravity = true;
		pickObj.GetComponent.<Rigidbody>().isKinematic = false;
		pickObj.transform.parent = null;
		pickObj.GetComponent.<Collider>().isTrigger = false;
		pickObj.GetComponent.<Rigidbody>().AddForce (transform.up * -800);
		pickObj = pickRef;
	}

	if (Input.GetMouseButtonDown(1) && !canPick && pickObj.GetComponent(pickedUpObj).cannotThrow != true){
		canPick = true;
		pickObj.GetComponent.<Rigidbody>().useGravity = true;
		pickObj.GetComponent.<Rigidbody>().isKinematic = false;
		pickObj.transform.parent = null;
		pickObj.GetComponent.<Collider>().isTrigger = false;
		pickObj = pickRef;
	}

}

function OnGUI (){
	GUI.Label (Rect (Screen.width/2, Screen.height/2, Screen.width/2, Screen.height/2), "+");
	
	if (guipick && canPick){
		GUI.Label (Rect (Screen.width/2, Screen.height/2, Screen.width/2, Screen.height/2), "Pickup");
	}
}