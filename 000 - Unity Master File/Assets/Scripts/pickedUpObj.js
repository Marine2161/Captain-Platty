#pragma strict

var cannotThrow = false;

function Start () {

}

function Update () {

}

function onTriggerEnter (other : Collider){
	if(other.gameObject.tag != "player" && other.gameObject.tag != "pickto"){
		cannotThrow = true;
	}
}

function OnTriggerExit (other : Collider){
	if(other.gameObject.tag != "player" && other.gameObject.tag != "pickto"){
		cannotThrow = false;
	}
}